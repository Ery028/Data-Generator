import { resolve } from 'path';
import { readFileSync} from 'fs';
import { Console } from 'console';

const password = [];

const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  
const numbers = "0123456789"
  
const symbols = "!@#$%&*"

function getLowUpLetter() {
  return letters[Math.floor(Math.random() * letters.length)];
};

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
};

function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
};

function generatePass(pass) {

  const PassLen = pass;

  let passwordgen = '';

  passwordgen += getLowUpLetter()

  passwordgen += getNumber()

  passwordgen += getSymbol()

  for(let i = passwordgen.length; i < PassLen; i++){
    const x = genetareX();
  
    passwordgen += x;
  };

  const psd = passwordgen;  

  const newPass = { psd };
  
  password.push(newPass);

  return newPass;
};

function genetareX() {
  const xs = [];

  xs.push(getLowUpLetter());

  xs.push(getNumber());

  xs.push(getSymbol());

  if(xs.length === 0) return "";

  return xs[Math.floor(Math.random() * xs.length)]
};

export default {generatePass};