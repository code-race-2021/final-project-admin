//Constantes globales

export const formOptions = [
  "producto",
  "cliente",
  "vendedor",
  "servicio",
  "delivery",
];
export const serviceRadioButtonOptions = ["Garantía", "Devolución"];
export const deliveryRadioButtonOptions = ["Regular", "Express"];
export const currencyRadioButtonOptions = ["ARS", "BRL", "USD"];

//Funciones útiles

export function hasSpecialCharacters(value) {
  //Regex for Valid Characters i.e. Alphabets, Numbers and Space.
  let regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  let hasSpecialCharacters = regex.test(value);

  return hasSpecialCharacters;
}

export function isNotNumber(value) {
  let regex = /^\d+$/;
  let isNotNumber = !regex.test(value);

  return isNotNumber;
}

export function hasLength(length, value) {
  return value.length == length;
}

export function isNotDNI(value) {
  return isNotNumber(value) || !hasLength(8, value);
}

export function isNotAlphabet(value) {
  let regex = /^[a-zA-Z]+$/g;
  return !regex.test(value);
}

export function isNotEmail(value) {
  let regex =
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
  return !regex.test(value);
}
