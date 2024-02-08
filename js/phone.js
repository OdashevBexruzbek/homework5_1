function phone_check(phone){
    if (!phone.match(/^\+998\d{9}$/)) {
        throw new Error('Telefon raqam xato formatda kiritildi!');
    }
    return phone
}

try {
    console.log(phone_check("+998924567890"));
} catch (error) {
    console.log(error, "Telfon raqam not'g'ri kiritildi!");
}


try {
    if (!validatePhone(user.phone)) {
        throw new Error('Notog\'ri formatdagi telefon raqam');
    }
  
    if (!validateEmail(user.email)) {
        throw new Error('Notog\'ri formatdagi email');
    }
    console.log('Yosh:', age);
for (let i = age; i > 0; i--) {
    setTimeout(() => {
    console.log(i);
    }, (age - i) * 1000);
}

    setTimeout(() => {
        console.log('Telefon raqami:', phone);
        console.log('Elektron pochta:', email);
    }, age * 1000);
} catch (error) {
    console.log(error);
}

import { function as phone_check} from './age.js'