// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  let phoneNumber = '(';
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let contador = [];
  let string = [];
  for (let index = 0; index < array.length; index += 1) {
    switch (array[index]) {
    case 0:
      contador[0] += 1;
      break;
    case 1:
      contador[1] += 1;
      break;
    case 2:
      contador[2] += 1;
      break;
    case 3:
      contador[3] += 1;
      break;
    case 4:
      contador[4] += 1;
      break;
    case 5:
      contador[5] += 1;
      break;
    case 6:
      contador[6] += 1;
      break;
    case 7:
      contador[7] += 1;
      break;
    case 8:
      contador[8] += 1;
      break;
    case 9:
      contador[9] += 1;
      break;
    default:
      console.log('Erro.');
    }
    string.push(array[index].toString());
    if (array[index] < 0 || array[index] > 9 || contador[array[index]] >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (index === 1) {
      phoneNumber += string[index];
      phoneNumber += ') ';
    } else if (index === 6) {
      phoneNumber += string[index];
      phoneNumber += '-';
    } else {
      phoneNumber += string[index];
    }
  }
  // console.log(contador);
  // console.log(string);
  return phoneNumber;
}
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let triangle = true;
  if ((lineA > (lineB + lineC)) || lineA < Math.abs(lineB - lineC)) {
    triangle = false;
  } else if ((lineB > (lineA + lineC)) || lineB < Math.abs(lineA - lineC)) {
    triangle = false;
  } else if ((lineC > (lineA + lineB)) || lineC < Math.abs(lineA - lineB)) {
    triangle = false;
  }
  return triangle;
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let array = string.split('');
  let waterGlasses = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === '1' || array[index] === '2' || array[index] === '3'
        || array[index] === '4' || array[index] === '5' || array[index] === '6'
        || array[index] === '7' || array[index] === '8' || array[index] === '9') {
      switch (array[index]) {
      case '1':
        waterGlasses += 1;
        break;
      case '2':
        waterGlasses += 2;
        break;
      case '3':
        waterGlasses += 3;
        break;
      case '4':
        waterGlasses += 4;
        break;
      case '5':
        waterGlasses += 5;
        break;
      case '6':
        waterGlasses += 6;
        break;
      case '7':
        waterGlasses += 7;
        break;
      case '8':
        waterGlasses += 8;
        break;
      case '9':
        waterGlasses += 9;
        break;
      default:
        console.log('Erro.');
      }
    }
  }
  // console.log(array);
  if (waterGlasses === 1) {
    return `${waterGlasses} copo de água`;
  }
  return `${waterGlasses} copos de água`;
}
// console.log(hydrate('1 cerveja, 2 cachaças e 3 copos de vinho'));

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
