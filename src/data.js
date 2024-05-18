import { v4 as uuidv4 } from "uuid";

//car logos
import lamborghiniLogo from "./assets/icons/lamborghini.svg";
import audiLogo from "./assets/icons/audi.svg";
import mersadesLogo from "./assets/icons/mers.svg";
import bmwLogo from "./assets/icons/bnw.svg";
import RRlogo from "./assets/icons/Rolls_Royce.svg";
import porsheLogo from "./assets/icons/porsche.svg";
import ferrariLogo from "./assets/icons/ferrari.svg";
import mclarenLogo from "./assets/icons/mclaren.svg";

//car photos Lamborghini
import urus from "./assets/img/labborghiniUrus.webp";
import urusFront from "./assets/img/labborghiniUrusFront.webp";
import urusInner from "./assets/img/labborghiniUrusInner.webp";
import urusInner2 from "./assets/img/labborghiniUrusInner2.webp";
import huracan from "./assets/img/labborghiniHuracanEVOSpyder.webp";
import huracanBack from "./assets/img/labborghiniHuracanEVOSpyderBack.webp";
import huracanFront from "./assets/img/labborghiniHuracanEVOSpyderFront.webp";
import huracanInner from "./assets/img/labborghiniHuracanEVOSpyderInner.webp";

//audi
import r8 from "./assets/img/AudiR8SpyderPerformance.webp";
import r8Back from "./assets/img/AudiR8SpyderPerformanceBack.webp";
import r8Inner from "./assets/img/AudiR8SpyderPerformanceInner.webp";
import r8Inner2 from "./assets/img/AudiR8SpyderPerformanceInner2.webp";
import rs6 from "./assets/img/AudiRS6.webp";
import rs6Back from "./assets/img/AudiRS6Back.webp";
import rs6Inner from "./assets/img/AudiRS6Inner.webp";
import rs6Inner2 from "./assets/img/AudiRS6Inner2.webp";

//mers
import amgg63 from "./assets/img/MercedesG63AMGBlackMatte.webp";
import amgg63Back from "./assets/img/MercedesG63AMGBlackMatteBack.webp";
import amgg63Inner from "./assets/img/MercedesG63AMGBlackMatteInner.webp";
import amgg63Inner2 from "./assets/img/MercedesG63AMGBlackMatteInner2.webp";
import maybachS680 from "./assets/img/MercedesMaybachS680.webp";
import maybachS680Back from "./assets/img/MercedesMaybachS680Back.webp";
import maybachS680Inner from "./assets/img/RRGhostMansoryInner.webp";
import maybachS680Inner2 from "./assets/img/MercedesMaybachS680Inner2.webp";

//bmw
import m430i from "./assets/img/BMW430iMSportGreen.webp";
import m430iBack from "./assets/img/BMW430iMSportGreenBack.webp";
import m430iInner from "./assets/img/BMW430iMSportGreenInner.webp";
import m430iInner2 from "./assets/img/BMW430iMSportGreenInner2.webp";
import m8 from "./assets/img/BMWM8Competition.webp";
import m8Back from "./assets/img/BMWM8CompetitionBack.webp";
import m8Inner from "./assets/img/BMWM8CompetitionInner.webp";
import m8Inner2 from "./assets/img/BMWM8CompetitionInner2.webp";
import xm from "./assets/img/BMWXM.webp";
import xmBack from "./assets/img/BMWXMBack.webp";
import xmInner from "./assets/img/BMWXMInner.webp";
import xmInner2 from "./assets/img/BMWXMInner2.webp";

//Rolls Royce
import dawn from "./assets/img/RRDawn.webp";
import dawnBack from "./assets/img/RRDawnBack.webp";
import dawnInner from "./assets/img/RRDawnInner.webp";
import dawnInner2 from "./assets/img/RRDawnInner2.webp";
import rrGhost from "./assets/img/RRGhostMansory.webp";
import rrGhostBack from "./assets/img/RRGhostMansorySide.webp";
import rrGhostInner from "./assets/img/RRGhostMansoryInner.webp";
import rrGhostInner2 from "./assets/img/RRGhostMansoryInner2.webp";

//porshe
import porsche911 from "./assets/img/Porsche911Turbo.webp";
import porsche911Back from "./assets/img/Porsche911TurboBack.webp";
import porsche911Inner from "./assets/img/Porsche911TurboInner.webp";
import porsche911Inner2 from "./assets/img/Porsche911TurboInner2.webp";
import porscheCayenneS from "./assets/img/PorscheCayenneS.webp";
import porscheCayenneSBack from "./assets/img/PorscheCayenneSBack.webp";
import porscheCayenneSInner from "./assets/img/PorscheCayenneSInner.webp";
import porscheCayenneSInner2 from "./assets/img/PorscheCayenneSInner2.webp";

//ferrari
import f8 from "./assets/img/FerrariF8Spider.webp";
import f8Back from "./assets/img/FerrariF8SpiderBack.webp";
import f8Inner from "./assets/img/FerrariF8SpiderInner.webp";
import f8Inner2 from "./assets/img/FerrariF8SpiderInner2.webp";
import ferRoma from "./assets/img/FerrariRoma.webp";
import ferRomaBack from "./assets/img/FerrariRomaBack.webp";
import ferRomaInner from "./assets/img/FerrariRomaInner.webp";
import ferRomaInner2 from "./assets/img/FerrariRomaInner2.webp";

//McLaren
import mc720S from "./assets/img/McLaren720S.webp";
import mc720SBack from "./assets/img/McLarenArturaBack.webp";
import mc720SInner from "./assets/img/McLaren720SInner.webp";
import mc720SInner2 from "./assets/img/McLaren720SInner2.webp";
import mcArtura from "./assets/img/McLarenArtura.webp";
import mcArturaBack from "./assets/img/McLarenArturaBack.webp";
import mcArturaInner from "./assets/img/McLarenArturaInner.webp";
import mcArturaInner2 from "./assets/img/McLarenArturaInner2.webp";

const generateUniqueId = () => uuidv4();

const cars = function (
  id,
  name,
  type,
  powerOfHorse,
  engine,
  acceleration,
  year,
  color,
  maxSpeed,
  priceinUzs,
  priceInUsd,
  brand,
  brandLogo,
  category,
  img1,
  img2,
  img3,
  img4
) {
  return {
    id,
    name,
    type,
    powerOfHorse,
    engine,
    acceleration,
    year,
    color,
    maxSpeed,
    priceinUzs,
    priceInUsd,
    brand,
    brandLogo,
    category,
    img1,
    img2,
    img3,
    img4,
  };
};

export const Cars = [
  cars(
    generateUniqueId(),
    "Lamborghini Urus",
    "SUV",
    650,
    4,
    3.6,
    2022,
    "Yashil",
    305,
    "2910924089",
    "229268",
    "Lamborghini",
    lamborghiniLogo,
    null,
    urus,
    urusFront,
    urusInner,
    urusInner2
  ),
  cars(
    generateUniqueId(),
    "Lamborghini Huracan EVO spyder",
    "Sport",
    640,
    5.2,
    3.1,
    2021,
    "Qora",
    305,
    "3618531000",
    "285000",
    "Lamborghini",
    lamborghiniLogo,
    "Eksklyuziv",
    huracan,
    huracanFront,
    huracanBack,
    huracanInner
  ),
  cars(
    generateUniqueId(),
    "Audi R8 Spyder performance",
    "Kabriolet",
    620,
    5.2,
    2.9,
    2022,
    "Yashil",
    300,
    "2049167757",
    "161395",
    "Audi",
    audiLogo,
    "Yangi",
    r8,
    r8Back,
    r8Inner,
    r8Inner2
  ),
  cars(
    generateUniqueId(),
    "Audi RS6",
    "Sport",
    600,
    4,
    3.6,
    2021,
    "Kulrang",
    250,
    "1597232280",
    "125800",
    "Audi",
    audiLogo,
    null,
    rs6,
    rs6Back,
    rs6Inner,
    rs6Inner2
  ),
  cars(
    generateUniqueId(),
    "Mercedes Maybach S680",
    "Sedan",
    612,
    6,
    4.5,
    2023,
    "Gold",
    250,
    "2955133650",
    "232750",
    "Mercedes",
    mersadesLogo,
    "Yangi",
    maybachS680,
    maybachS680Back,
    maybachS680Inner,
    maybachS680Inner2
  ),
  cars(
    generateUniqueId(),
    "Mercedes G63 AMG Black matte",
    "SUV",
    585,
    4,
    4.5,
    2022,
    "Qora",
    220,
    "2666286000",
    "210000",
    "Mercedes",
    mersadesLogo,
    null,
    amgg63,
    amgg63Back,
    amgg63Inner,
    amgg63Inner2
  ),
  cars(
    generateUniqueId(),
    "BMW 430i M Sport Green",
    "Kabriolet",
    252,
    2,
    4,
    2023,
    "Yashil",
    250,
    "902982192",
    "71120",
    "BMW",
    bmwLogo,
    null,
    m430i,
    m430iBack,
    m430iInner,
    m430iInner2
  ),
  cars(
    generateUniqueId(),
    "BMW M8 competition",
    "Sport",
    625,
    4.4,
    3.2,
    2022,
    "Kulrang",
    250,
    "1762288080",
    "138800",
    "BMW",
    bmwLogo,
    "Yangi",
    m8,
    m8Back,
    m8Inner,
    m8Inner2
  ),
  cars(
    generateUniqueId(),
    "BMW XM",
    "SUV",
    653,
    4.4,
    4.3,
    2023,
    "Qora",
    250,
    "2348871000",
    "185000",
    "BMW",
    bmwLogo,
    "Eksklyuziv",
    xm,
    xmBack,
    xmInner,
    xmInner2
  ),
  cars(
    generateUniqueId(),
    "Rolls-Royce Dawn",
    "Kabriolet",
    563,
    6.6,
    4.9,
    2019,
    "Gold",
    250,
    "4565697360",
    "359250",
    "Rolls Royce",
    RRlogo,
    null,
    dawn,
    dawnBack,
    dawnInner,
    dawnInner2
  ),
  cars(
    generateUniqueId(),
    "Rolls-Royce Ghost Mansory",
    "Sedan",
    592,
    6.7,
    4.6,
    2021,
    "Qora",
    280,
    "4570776000",
    "360000",
    "Rolls Royce",
    RRlogo,
    null,
    rrGhost,
    rrGhostBack,
    rrGhostInner,
    rrGhostInner2
  ),
  cars(
    generateUniqueId(),
    "Porsche 911 turbo S",
    "Sport",
    650,
    3.8,
    2.8,
    2023,
    "Qora",
    330,
    "2793252000",
    "220000",
    "Porsche",
    porsheLogo,
    "Yangi",
    porsche911,
    porsche911Back,
    porsche911Inner,
    porsche911Inner2
  ),
  cars(
    generateUniqueId(),
    "Porsche Cayenne S",
    "SUV",
    440,
    3,
    4.5,
    2022,
    "Qora",
    265,
    "1206177000",
    "95000",
    "Porsche",
    porsheLogo,
    null,
    porscheCayenneS,
    porscheCayenneSBack,
    porscheCayenneSInner,
    porscheCayenneSInner2
  ),
  cars(
    generateUniqueId(),
    "Ferrari F8 Spider",
    "Sport",
    720,
    3.9,
    2.9,
    2022,
    "Qora",
    340,
    "3808980000",
    "300000",
    "Ferrari",
    ferrariLogo,
    "Eksklyuziv",
    f8,
    f8Back,
    f8Inner,
    f8Inner2
  ),
  cars(
    generateUniqueId(),
    "Ferrari Roma",
    "Sport",
    620,
    3.9,
    3.4,
    2021,
    "Qizil",
    300,
    "2920218000",
    "230000",
    "Ferrari",
    ferrariLogo,
    null,
    ferRoma,
    ferRomaBack,
    ferRomaInner,
    ferRomaInner2
  ),
  cars(
    generateUniqueId(),
    "McLaren 720S",
    "Sport",
    720,
    4,
    2.9,
    2023,
    "Qora",
    330,
    "3808980000",
    "300000",
    "McLaren",
    mclarenLogo,
    "Yangi",
    mc720S,
    mc720SBack,
    mc720SInner,
    mc720SInner2
  ),
  cars(
    generateUniqueId(),
    "McLaren Artura",
    "Sport",
    671,
    3,
    3,
    2023,
    "Sariq",
    330,
    "2856735000",
    "225000",
    "McLaren",
    mclarenLogo,
    "Yangi",
    mcArtura,
    mcArturaBack,
    mcArturaInner,
    mcArturaInner2
  ),
];
