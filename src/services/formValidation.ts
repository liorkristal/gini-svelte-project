export function firstNameValidation(firstName: string) {
  const regex = /^[A-Za-z]{2,12}$/;
  return regex.test(firstName);
}

export function lastNameValidation(lastName: string) {
  const regex = /^[A-Za-z]{2,15}$/;
  return regex.test(lastName);
}

export function emailValidation(email: string) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function passwordValidation(password: string) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/;
  return regex.test(password);
}

export function prefixPhoneValidation(prefixPhone: string) {
  const regex = /^\d{3}$/;
  return regex.test(prefixPhone);
}

export function suffixPhoneValidation(suffixPhone: string) {
  const regex = /^\d{7}$/;
  return regex.test(suffixPhone);
}

export interface Error {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  prefixPhone?: string;
  suffixPhone?: string;
}

export function validateField(
  value: string,
  errorObject: Error,
  key: keyof Error,
  validationFunction: (value: string) => boolean,
  errorMessageFunction: (field: keyof Error) => string
) {
  if (validationFunction(value)) {
    const currentErrors = { ...errorObject };
    delete currentErrors[key];
    errorObject = currentErrors;
  } else {
    errorObject[key] = errorMessageFunction(key);
  }
  return errorObject;
}
