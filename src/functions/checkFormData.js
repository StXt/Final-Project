export default function checkFormData() {
  let firstName = document.forms[0].elements[0];
  let lastName = document.forms[0].elements[1];
  let login = document.forms[0].elements[2];
  let password = document.forms[0].elements[3];
  let repeated = document.forms[0].elements[4]; 
  
  if (
    password.value === '' ||
    repeated.value === '' ||
    firstName.value === '' ||
    lastName === '' ||
    login === ''
  ) {
    alert('Будь ласка, заповніть необхідні поля.'); 
    password.value = '';
    repeated.value = '';   
    return;  
  } else if (password.value !== repeated.value) {
    alert('Паролі не співпадають. Будь ласка, повторіть введення паролю.');
    password.value = '';
    repeated.value = '';   
    return;        
  } else if (login.value in window.localStorage) {
    alert('Користувач з таким логіном вже існує');
    login.value = '';
    password.value = '';
    repeated.value = '';
    return;
  }
  
  alert('Ваш профіль збережено. Дякуюємо за реєстрацію.');
  return true;
}