export default function signPassword() {
    let password = document.forms[0].elements[3];
    let repeated = document.forms[0].elements[4]; 
    
    if (password.value === '' || repeated.value === '' ) {
        alert('Будь ласка, заповніть необхідні поля.'); 
        password.value = '';
        repeated.value = '';   
        return;  
    } else if (password.value !== repeated.value) {
        alert('Паролі не співпадають. Будь ласка, повторіть введення паролю.');
        password.value = '';
        repeated.value = '';   
        return;        
    }
    
    alert('Ваш профіль збережено. Дякуюємо за реєстрацію.');
    return true;
}