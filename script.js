// seleção de elementos

const generatePasswordButton = document.querySelector('.generate-password');
const generatedPasswordElement = document.querySelector('.generated-password');

// funções
function getLetterLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getLetterUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getNumber() {
  return Math.floor(Math.random() * 10).toString();
}

function getSymbol() {
  const symbols = '(){}[]=<>/,.!@#$%&*=+-';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword(
  getLetterLowerCase,
  getLetterUpperCase,
  getNumber,
  getSymbol
) {
  let password = '';
  const passwordLength = 10;

  const generators = [
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
  ];

  for (let i = 0; i < passwordLength; i = i + generators.length) {
    generators.forEach(() => {
      const randomValue =
        generators[Math.floor(Math.random() * generators.length)]();

      password += randomValue;
    });
  }
  password = password.slice(0, passwordLength);

  generatedPasswordElement.style.display = 'block';
  generatedPasswordElement.querySelector('h4').innerHTML = password;
}

// eventos
generatePasswordButton.addEventListener('click', () => {
  generatePassword(
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
  );
});
