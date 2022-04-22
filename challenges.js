// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  return (param1 && param2);
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = [];
  if (string === 'foguete') {
    array.push('foguete');
  } else {
    array = string.split(' ');
  }
  return array;
}
// console.log(splitSentence('foguete'));

// Desafio 4
function concatName(arrayStrings) {
  // seu código aqui
  let newString = '';
  newString += arrayStrings[arrayStrings.length - 1];
  newString += ', ';
  newString += arrayStrings[0];
  return newString;
}
// console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = 0;
  pontos += wins * 3;
  pontos += ties;
  return pontos;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maior = -100;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = array[index];
    }
  }
  let rep = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maior) {
      rep += 1;
    }
  }
  return rep;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);
  if (dist1 === dist2) {
    return 'os gatos trombam e o rato foge';
  }
  if (dist1 < dist2) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(arrayInicial) {
  // seu código aqui
  let arrayFinal = [];
  for (let index = 0; index < arrayInicial.length; index += 1) {
    if (arrayInicial[index] % 3 === 0 && arrayInicial[index] % 5 === 0) {
      arrayFinal.push('fizzBuzz');
    } else if (arrayInicial[index] % 3 === 0) {
      arrayFinal.push('fizz');
    } else if (arrayInicial[index] % 5 === 0) {
      arrayFinal.push('buzz');
    } else {
      arrayFinal.push('bug!');
    }
  }
  return arrayFinal;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let stringCod = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a' || string[index] === 'e' || string[index] === 'i'
        || string[index] === 'o' || string[index] === 'u') {
      switch (string[index]) {
      case 'a':
        stringCod += '1';
        break;
      case 'e':
        stringCod += '2';
        break;
      case 'i':
        stringCod += '3';
        break;
      case 'o':
        stringCod += '4';
        break;
      case 'u':
        stringCod += '5';
        break;
      default:
        console.log('Erro.');
      }
    } else {
      stringCod += string[index];
    }
  }
  return stringCod;
}
// console.log(encode('hi there!'));
function decode(stringCod) {
  // seu código aqui
  let string = '';
  for (let index = 0; index < stringCod.length; index += 1) {
    if (stringCod[index] === '1' || stringCod[index] === '2' || stringCod[index] === '3'
        || stringCod[index] === '4' || stringCod[index] === '5') {
      switch (stringCod[index]) {
      case '1':
        string += 'a';
        break;
      case '2':
        string += 'e';
        break;
      case '3':
        string += 'i';
        break;
      case '4':
        string += 'o';
        break;
      case '5':
        string += 'u';
        break;
      default:
        console.log('Erro.');
      }
    } else {
      string += stringCod[index];
    }
  }
  return string;
}
// console.log(decode('h3 th2r2!'));

// Desafio 10
function techList(array, name) {
  // seu código aqui
  let newArray = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  let arrayOrdenado = array.sort();
  for (let index = 0; index < arrayOrdenado.length; index += 1) {
    let objeto = {
      tech: arrayOrdenado[index],
      name,
    };
    newArray.push(objeto);
  }
  return newArray;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
