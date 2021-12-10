export function isSKU(value) {
  //Regex for Valid Characters i.e. Alphabets, Numbers and Space.
  let regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  //Validate TextBox value against the Regex.
  let isSpecialCharacter = regex.test(value);

  if (isSpecialCharacter) {
    return true;
  } else {
    return false;
  }
}

export function isNumber(value) {
  let regex = /^\d+$/;
  let isNumber = !regex.test(value);

  if (isNumber) {
    return true;
  } else {
    return false;
  }
}

export function isDNI(value) {
  let regex = /^\d+$/;
  let isNumber = !regex.test(value);

  if (isNumber || value.length < 8 || value.length > 8) {
    return true;
  } else {
    return false;
  }
}

export function isAlphabet(value) {
  let regex = /^[a-zA-Z]+$/g;
  let isAlphabet = !regex.test(value);

  if (isAlphabet) {
    return true;
  } else {
    return false;
  }
}

export function isEmail(value) {
  let regex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  let isEmail = !regex.test(value);

  if (isEmail) {
    return true;
  } else {
    return false;
  }
}
