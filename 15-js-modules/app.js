// import método from 'biblioteca';
// * carrega tudo da lib
// as => alias para o método (novo nome)
import { union as juntaTudo, uniq as soOsMesmos } from 'ramda';

import soma, { sub, multiplicacao, div as dividir, PI } from './utils';

const arr1 = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6];
const arr2 = [5, 6, 6, 6, 7, 7, 8, 9, 10, 1];

const arr3 = juntaTudo(arr1, arr2);

const arr4 = soOsMesmos(arr1);

console.log(arr3);

console.log(arr4);

console.log(soma(3, 2));

console.log(sub(3, 2));

console.log(multiplicacao(7, 2));

console.log(dividir(4, 2));

console.log(PI);