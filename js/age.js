export function yosh_aniqla(age){
    if (!Number(age) || typeof age == "boolean" || isNaN(age)){
        throw new Error("Yosh faqat sonlardan tashkil topgan bo'lishi kerak!")
    }
    return Date - age
}
try {
    console.log(yosh_aniqla(18));
} catch (error) {
    console.log(error);
}

import { function as yosh_aniqla} from './age.js'