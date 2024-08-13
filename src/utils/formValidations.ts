export const emailValidation = {
  required: "Це поле обов'язкове",
  pattern: {
    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    message: "Введіть валідну адресу",
  },
};
