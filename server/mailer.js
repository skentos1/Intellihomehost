import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import puppeteer from 'puppeteer';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kentos.simon@gmail.com',
        pass: 'oqhe kvjg rjmo uvgr' // Make sure to keep this secure and use environment variables in a production environment
    },
});

const generateInvoiceHTML = (orderDetails) => {
    const orderDate = new Date();
    const paymentDueDate = new Date(orderDate);
    paymentDueDate.setDate(orderDate.getDate() + 10);

    return `
        <!DOCTYPE html>
        <html lang="sk">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    line-height: 1.6;
                }
                .container {
                    width: 100%;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                    border: 1px solid #ddd;
                }
                .header, .footer {
                    text-align: center;
                    margin-bottom: 20px;
                }
                .header img {
                    width: 100px;
                }
                .details, .summary {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 20px;
                }
                .details th, .details td, .summary th, .summary td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: left;
                }
                .details th {
                    background-color: #f4f4f4;
                }
                .summary th, .summary td {
                    text-align: right;
                }
                    .billing-info {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                }
                .billing-info div {
                    width: 48%;
                }
                .payment-details {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 20px;
                }
                .payment-details th, .payment-details td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: left;
                }
                .payment-details th {
                    background-color: #f4f4f4;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Faktúra</h1>
                    <p>Číslo faktúry: ${orderDetails.orderNumber}</p>
                    <p>Dátum faktúry: ${orderDate.toLocaleDateString('sk-SK')}</p>
                </div>
                  <div class="billing-info">
                    <div>
                        <h2>Fakturačné údaje</h2>
                        <p>Meno: ${orderDetails.userInfo.meno} ${orderDetails.userInfo.priezvisko}</p>
                        <p>Adresa: ${orderDetails.userInfo.adresa}</p>
                        <p>Mesto: ${orderDetails.userInfo.mesto}</p>
                    </div>
                    <div>
                        <p>PSČ: ${orderDetails.userInfo.psc}</p>
                        <p>Email: ${orderDetails.userInfo.email}</p>
                        <p>Mobil: ${orderDetails.userInfo.mobil}</p>
                    </div>
                </div>
                <table class="details">
                    <tr>
                        <th>Popis</th>
                        <th>Počet</th>
                        <th>Cena</th>
                        <th>Zľavnená Cena</th>
                    </tr>
                    ${orderDetails.orderSummary.map(item => `
                    <tr>
                        <td>${item.title}</td>
                        <td>1</td>
                        <td>${item.price} €</td>
                        <td>${item.discountedPrice} €</td>
                    </tr>
                    `).join('')}
                </table>
                <table class="summary">
                    <tr>
                        <th>Spolu bez DPH</th>
                        <td>${orderDetails.totalPrice} €</td>
                    </tr>
                    <tr>
                        <th>DPH 20%</th>
                        <td>${orderDetails.totalDPHPrice - orderDetails.totalPrice} €</td>
                    </tr>
                    <tr>
                        <th>Celkom</th>
                        <td>${orderDetails.totalDPHPrice} €</td>
                    </tr>
                </table>
                <table class="payment-details">
                    <h1>Platobne udaje</h1>
                    <tr>
                        <th>Dátum rozhodnutia</th>
                        <td>${orderDate.toLocaleDateString('sk-SK')}</td>
                    </tr>
                    <tr>
                        <th>Dátum splatnosti</th>
                        <td>${paymentDueDate.toLocaleDateString('sk-SK')}</td>
                    </tr>
                    <tr>
                        <th>Čiastka</th>
                        <td>EUR ${orderDetails.totalDPHPrice}</td>
                    </tr>
                    <tr>
                        <th>BIC/SWIFT</th>
                        <td>SPSRSKBA</td>
                    </tr>
                    <tr>
                        <th>IBAN</th>
                        <td>SK978180000000700084912</td>
                    </tr>
                    <tr>
                        <th>VS</th>
                        <td>${orderDetails.orderNumber}</td>
                    </tr>
                </table>
                <div class="footer">
                    <p>Ďakujeme za váš nákup!</p>
                    <p>IntelliHome</p>
                </div>
            </div>
        </body>
        </html>
    `;
};


const generateInvoicePDF = async (html) => {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        dumpio: true
    });
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    const pdfBuffer = await page.pdf({ format: 'A4', timeout: 60000 }); // Set timeout to 60 seconds
    await browser.close();
    return pdfBuffer;
};

const sendOrderConfirmation = async (userEmail, orderDetails) => {

    const orderItemsHtml = orderDetails.orderSummary.map(item => `
        <tr>
            <td>${item.title}</td>
            <td>${item.subtitle}</td>
            <td>${item.price} €</td>
            <td>${item.discountedPrice} €</td>
        </tr>
    `).join('');

    const invoiceHTML = generateInvoiceHTML(orderDetails);
    const invoicePDF = await generateInvoicePDF(invoiceHTML);

    const mailOptions = {
        from: '"IntelliHome" <kentos.simon@gmail.com>',
        to: userEmail,
        subject: 'Ďakujeme za vašu objednávku!',
        html: `
            <!DOCTYPE html>
            <html lang="sk">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        width: 100%;
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #ffffff;
                        padding: 20px;
                        border: 1px solid #dddddd;
                    }
                    .header {
                        text-align: center;
                        padding: 10px 0;
                    }
                    .header img {
                        width: 300px;
                    }
                    .content {
                        padding: 20px;
                    }
                    .content h1 {
                        font-size: 24px;
                        color: #333333;
                    }
                    .content p {
                        font-size: 16px;
                        color: #666666;
                        line-height: 1.5;
                    }
                    .order-details {
                        margin: 20px 0;
                        border-top: 1px solid #dddddd;
                        border-bottom: 1px solid #dddddd;
                        padding: 20px 0;
                    }
                    .order-details h2 {
                        font-size: 18px;
                        color: #333333;
                    }
                    .order-details table {
                        width: 100%;
                        border-collapse: collapse;
                    }
                    .order-details table th,
                    .order-details table td {
                        text-align: left;
                        padding: 10px;
                        border: 1px solid #dddddd;
                    }
                    .order-details table th {
                        background-color: #f4f4f4;
                    }
                    .footer {
                        text-align: center;
                        padding: 20px;
                        font-size: 14px;
                        color: #666666;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <img src="cid:logo" alt="IntelliHome Logo">
                    </div>
                    <div class="content">
                        <h1>Objednané!</h1>
                        <p>Ahoj ${orderDetails.userInfo.meno},</p>
                        <p>Ďakujeme za Vašu objednávku!</p>
                        <p>Platobné údaje máte v prílohe, prosím zrealizujte platbu v do troch pracovných dní!</p>
                        <div class="order-details">
                            <h2>Podrobnosti objednávky:</h2>
                            <table>
                                <tr>
                                    <th>Číslo objednávky</th>
                                    <td>${orderDetails.orderNumber}</td>
                                </tr>
                                <tr>
                                    <th>Adresa</th>
                                    <td>${orderDetails.userInfo.adresa}, ${orderDetails.userInfo.mesto}, ${orderDetails.userInfo.psc}</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>${orderDetails.userInfo.email}</td>
                                </tr>
                                <tr>
                                    <th>Mobil</th>
                                    <td>${orderDetails.userInfo.mobil}</td>
                                </tr>
                            </table>
                            <h2>Produkty</h2>
                            <table>
                                <tr>
                                    <th>Názov</th>
                                    <th>Popis</th>
                                    <th>Cena</th>
                                    <th>Zľavnená cena</th>
                                </tr>
                                ${orderItemsHtml}
                            </table>
                            <h2>Celkovo</h2>
                            <table>
                                <tr>
                                    <th>Cena</th>
                                    <td>${orderDetails.totalPrice} €</td>
                                </tr>
                                <tr>
                                    <th>Cena (s DPH)</th>
                                    <td>${orderDetails.totalDPHPrice} €</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="footer">
                        <p>&copy; 2024 IntelliHome. Všetky práva vyhradené.</p>
                    </div>
                </div>
            </body>
            </html>
        `,
        attachments: [
            {
                filename: 'faktura.pdf',
                content: invoicePDF,
                contentType: 'application/pdf'
            },
            {
                filename: 'logo.png', // Ensure the logo file is in the correct directory
                path: path.join(__dirname, './assets/logo.png'), // Update the path accordingly
                cid: 'logo' // Same cid value as in the email HTML
            }
        ]
    };

    await transporter.sendMail(mailOptions);
};



export { sendOrderConfirmation };