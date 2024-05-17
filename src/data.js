import { v4 as uuidv4 } from "uuid";

//car logos
import lamborghiniLogo from "./assets/icons/lamborghini.svg";

const generateUniqueId = () => uuidv4();

export const Cars = [
  {
    id: generateUniqueId(),
    name: "Lamborghini Urus",
    type: "Crossover",
    powerOfHorse: 650,
    engine: 4,
    acceleration: 3.6,
    year: 2022,
    color: "Yashil",
    maxSpeed: 305,
    price: 10000000,
    priceInRub: 10000000,
    brand: "Lamborghini",
    brandLogo: lamborghiniLogo,
    category: null,
  },
];
