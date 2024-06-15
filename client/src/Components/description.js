import SmartLights1 from '../assets/description/SmartLightsD1.jpg';
import SmartHome1 from '../assets/description/SmartHomeD1.jpg';
import SmartLock1 from '../assets/description/SmartLockD.jpg';
import svetla1 from '../assets/description/svetlaB.jpg'
import svetlaB from '../assets/description/Svetla1.jpg'
import svetla2 from '../assets/description/Svetla2.jpg'
import zamkyB from '../assets/description/zamkyB.jpg'
import zamky2 from '../assets/description/zamky2.jpg'
import kurenieB from '../assets/description/KurenieB.jpg'
import kurenie1 from '../assets/description/kurenie1.jpg'
import kurenie2 from '../assets/description/kurenie2.jpg'
import kameraB from '../assets/description/kameraB.jpg'
import kamera1 from '../assets/description/kamera1.jpg'
import kamera2 from '../assets/description/kamera2.jpg'
import branaB from '../assets/description/branaB.jpg'
import brana1 from '../assets/description/brana1.jpg'
import brana2 from '../assets/description/brana2.jpg'
import exteriorB from '../assets/description/exteriorB.jpg'
import exterior1 from '../assets/description/exterior1.jpg'
import exterior2 from '../assets/description/exterior2.jpg'


const description = [
    {
        id: 1,
        category: 'Svetla',
        Banner: svetlaB,
        title1: "Plne inteligentné svetlá",
        description1: "Zlepšite osvetlenie vo vašej domácnosti pomocou inteligentných svetiel, ktoré umožňujú ovládanie jasu, farby a atmosféry. Vytvorte rôzne svetelné scenáre pre rôzne aktivity, prispôsobené vašim potrebám a náladám.",
        sub1: 'Prisposobte si svoju domácnosť',
        subdescription1: "S našimi inteligentnými svetlami môžete prispôsobiť osvetlenie v každej miestnosti podľa vašich potrieb a preferencií. Vytvorte si ideálne podmienky pre prácu, relax alebo zábavu.",
        title2: "Ovládanie pomocou telefónu",
        description2: "Majte úplnú kontrolu nad osvetlením vo vašej domácnosti pomocou aplikácie na smartfóne. Zmeňte jas, farbu a atmosféru svetiel jednoducho a rýchlo.",
        sub2: 'Majte plnú kontrolu',
        subdescription2: "Pomocou telefónu môžete jednoducho meniť nastavenia svetiel, plánovať zapínanie a vypínanie, a vytvárať si svetelné scenáre pre rôzne príležitosti.",
        Img: svetla2,
        Img2: svetla1,
    },
    {
        id: 2,
        category: 'Bezpečnosť',
        Banner: zamkyB,
        title1: "Elektronické zámky",
        description1: "Zvýšte bezpečnosť vášho domova s elektronickými inteligentnými zámkami, ktoré umožňujú diaľkový prístup a monitorovanie aktivity. Poskytnite prístup len tým, ktorým dôverujete, a zabezpečte si pokojný spánok.",
        sub1: 'Zvýšte bezpečnosť vášho domova',
        subdescription1: "Elektronické zámky poskytujú moderné riešenie pre bezpečný a pohodlný prístup do vášho domova. Monitorujte, kto a kedy vstupuje do vášho domova, a ovládajte zámky na diaľku.",
        title2: "Dôverujte inteligentným zámkom",
        description2: "Inteligentné zámky kombinujú pohodlie a bezpečnosť v jednom zariadení. Sledujte prístupy v reálnom čase a jednoducho spravujte, kto má prístup do vášho domova.",
        sub2: 'Komfort a bezpečnosť v jednom',
        subdescription2: "Inteligentné zámky vám umožňujú pohodlné a bezpečné ovládanie prístupu do vášho domova pomocou smartfónu. Už nikdy sa nemusíte obávať stratených kľúčov.",
        Img: SmartLock1,
        Img2: zamky2,
    },
    {
        id: 3,
        category: 'Ovládanie',
        Banner: kurenieB,
        title1: "Inteligentné kúrenie",
        description1: "Optimalizujte vykurovací systém vo vašom dome s inteligentným kúrením. Nastavte ideálnu teplotu, plánujte harmonogramy a šetrite energiu bez námahy.",
        sub1: 'Optimalizujte vykurovací systém',
        subdescription1: "S inteligentným kúrením môžete jednoducho riadiť teplotu v jednotlivých miestnostiach, šetriť energiu a udržiavať pohodlné prostredie vo vašom dome.",
        title2: "Úspora energie a pohodlie",
        description2: "Inteligentné kúrenie vám umožňuje efektívne riadenie teploty vo vašom dome, čo vedie k nižšej spotrebe energie a vyššiemu komfortu.",
        sub2: 'Efektívne riadenie teploty',
        subdescription2: "Využite inteligentné kúrenie na udržiavanie ideálnej teploty v každej miestnosti. Znížte svoje náklady na energiu a zároveň si užívajte pohodlný domov.",
        Img: kurenie1,
        Img2: kurenie2,
    },
    {
        id: 4,
        category: 'Bezpečnosť',
        Banner: kameraB,
        title1: "Bezpečnostný kamerový systém",
        description1: "Sledujte svoj domov v reálnom čase pomocou bezpečnostného kamerového systému. Monitorujte živé záznamy a dostávajte upozornenia na podozrivú aktivitu.",
        sub1: 'Sledujte svoj domov v reálnom čase',
        subdescription1: "Bezpečnostné kamery vám umožňujú mať vždy prehľad o dianí vo vašom dome. Sledujte živé prenosy a zaznamenávajte dôležité udalosti.",
        title2: "Zabezpečte svoj majetok",
        description2: "Majte pod kontrolou svoj domov aj keď nie ste doma. Naše bezpečnostné kamery vám poskytnú pokoj a bezpečnosť.",
        sub2: 'Pokojný spánok s kamerovým systémom',
        subdescription2: "S bezpečnostnými kamerami môžete monitorovať váš domov nepretržite. Získajte upozornenia na akékoľvek podozrivé aktivity a zabezpečte si kľudný spánok.",
        Img: kamera1,
        Img2: kamera2,
    },
    {
        id: 5,
        category: 'Ovládanie',
        Banner: branaB,
        title1: "Ovládanie brány pomocou aplikácie",
        description1: "Ovládajte vašu bránu pohodlne pomocou aplikácie na smartfóne. Otvárajte a zatvárajte bránu na diaľku a sledujte aktivitu v reálnom čase.",
        sub1: 'Prevezmite kontrolu nad svojou bránou',
        subdescription1: "S aplikáciou na ovládanie brány získate maximálnu flexibilitu. Otvárajte a zatvárajte bránu z pohodlia vášho domova alebo kdekoľvek na svete.",
        title2: "Jednoduché ovládanie na diaľku",
        description2: "Užite si pohodlie ovládania brány pomocou aplikácie. Sledujte, kto prichádza a odchádza, a majte kontrolu nad vstupom do vášho domova.",
        sub2: 'Maximálna flexibilita a kontrola',
        subdescription2: "Otvárajte a zatvárajte bránu jednoducho pomocou vášho telefónu. Získajte prehľad o pohybe pri vašej bráne a zvýšte bezpečnosť vášho domova.",
        Img: brana1,
        Img2: brana2,
    },
    {
        id: 6,
        category: 'Svetlá',
        Banner: exteriorB,
        title1: "Plne inteligentné exteriérové svetlá",
        description1: "Osvežte vaše vonkajšie prostredie s plne inteligentnými exteriérovými svetlami. Vytvorte atmosféru a zvýšte bezpečnosť vo vašej záhrade alebo na terase.",
        sub1: 'Osvežte vaše vonkajšie prostredie',
        subdescription1: "Inteligentné exteriérové svetlá poskytujú nielen bezpečnosť, ale aj estetický zážitok. Osvetlite vašu záhradu alebo dvor podľa vašich predstáv.",
        title2: "Inteligentné osvetlenie vonkajších priestorov",
        description2: "Ovládajte vonkajšie osvetlenie cez smartfón a vytvorte si príjemné prostredie na relaxáciu a zábavu. Zvýšte bezpečnosť svojho domova s inteligentným osvetlením.",
        sub2: 'Bezpečnosť a atmosféra',
        subdescription2: "Inteligentné exteriérové svetlá vám umožňujú jednoducho meniť nastavenia osvetlenia pre rôzne príležitosti. Užite si krásne osvetlené vonkajšie priestory a vyššiu bezpečnosť.",
        Img: exterior1,
        Img2: exterior2,
    },
];

export default description;
