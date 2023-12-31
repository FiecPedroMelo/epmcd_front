export default function validaCnpj(cnpj: string): boolean {
    cnpj = cnpj.replace(/[^\d]+/g, '');
  
    if (cnpj.length !== 14 || !!cnpj.match(/(\d)\1{13}/)) {
      return false;
    }
  
    const length = cnpj.length - 2;
    const numbers = cnpj.substring(0, length);
    const digits = cnpj.substring(length);
    const sum = numbers
      .split('')
      .map((number, index) => parseInt(number) * (length - index + 1))
      .reduce((acc, value) => acc + value, 0);
  
    const verifyDigit = (sum % 11 < 2 ? 0 : 11 - (sum % 11)).toString();
  
    return digits.charAt(0) === verifyDigit;
  }