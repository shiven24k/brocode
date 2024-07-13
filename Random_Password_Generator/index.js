function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChard = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbersChars = '0123456789';
    const symbolChars = '!@#$%&*';
    let allowedChars = '';
    let password = '';
    allowedChars += (includeLowercase) ? lowercaseChars : '';
    allowedChars += (includeUppercase) ? uppercaseChard : '';
    allowedChars += (includeNumbers) ? numbersChars : '';
    allowedChars += (includeSymbols) ? symbolChars : '';
    
    if (length <= 0) {
        return 'Password length must be greater than 1';
    }if (allowedChars.length === 0) {
        return 'Must select at least one character type';
    }
    // main part of the function
    for(let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[random];
    }

    return password;
}
const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(
    passwordLength,
     includeLowercase,
      includeUppercase,
       includeNumbers,
        includeSymbols);
console.log(password);

