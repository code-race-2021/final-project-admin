export function hasSpecialCharacters(value) {
  //Regex for Valid Characters i.e. Alphabets, Numbers and Space.
  let regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  let isInvalid = regex.test(value);

  return isInvalid;
}

export function isNumber(value) {
  let regex = /^\d+$/;
  let isInvalid = !regex.test(value);

  return isInvalid;
}

export function isDNI(value) {
  let regex = /^\d+$/;
  let isInvalid = !regex.test(value)

  return isInvalid;
}

export function isAlphabet(value) {
  let regex = /^[a-zA-Z]+$/g;
  let isInvalid = !regex.test(value);

 
  return isInvalid;
}

export function isEmail(value) {
  let regex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  let isInvalid = !regex.test(value);

  return isInvalid;
}
