import { resolve } from 'path';
import { readFileSync} from 'fs';
import { Console } from 'console';

const array_create = (total, numero) => Array.from(Array(total), () => number_random(numero));
const number_random = (number) => (Math.round(Math.random() * number));
const module = (dividendo, divisor) => Math.round(dividendo - (Math.floor(dividendo / divisor) * divisor));
let cpfgenerated = [];

function create(cpf) {
  const array_lenght = 9;
  const n = 9;
  const [n1, n2, n3, n4, n5, n6, n7, n8, n9] = array_create(array_lenght, n);

  let d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
  d1 = 11 - (module(d1, 11));
  if (d1 >= 10) d1 = 0;

  let d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
  d2 = 11 - (module(d2, 11));
  if (d2 >= 10) d2 = 0;

  if (cpf === "mascara") {
    const Cpf = `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${d1}${d2}`;

    const newCPF = { Cpf };

    cpfgenerated.push(newCPF);

    return newCPF;
  }else{
    const Cpf = `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${d1}${d2}`;

    const newCPF = { Cpf };

    cpfgenerated.push(newCPF);

    return newCPF;
  };
};

export default {create};
