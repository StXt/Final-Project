import User from './User';
import checkFormData from './checkFormData';

export default function addUser()  {   
  if (checkFormData()) {    
    let newUser = new User();
    let newUserJSON = JSON.stringify(newUser);
    localStorage.setItem(newUser.login, newUser.password);
    
    let userKey = `${newUser.login} | ${newUser.password}`;
    localStorage.setItem(userKey, newUserJSON);
    localStorage.setItem('currentUser', userKey);
    console.log(localStorage);

    return true;
  }
  return false;
}