export default function User() {
    this.firstName = document.forms[0].elements[0].value;
    this.lastName = document.forms[0].elements[1].value;
    this.login = document.forms[0].elements[2].value;
    this.password = document.forms[0].elements[3].value; 
}