export const requiredValidation = {
  required: "Це поле обов'язкове",
};
export const emailValidation = {
  ...requiredValidation,
  pattern: {
    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    message: "Введіть валідну адресу",
  },
};
export const phoneValidation = {
  ...requiredValidation,
  minLength: {
    value: 9,
    message: "Введіть валідний номер",
  },
};
