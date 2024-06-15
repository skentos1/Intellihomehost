export const validateOrderData =  (req, res, next ) => {
    const { userInfo, orderSummary, totalPrice } =  req.body;

    if(!userInfo || !orderSummary || !totalPrice ){
        return res.status(400).json({message: 'invalid data'});
    }

    next();
}