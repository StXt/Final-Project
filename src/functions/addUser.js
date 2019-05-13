import User from './User';
import signPassword from './signPassword';

export default function addUser(e)  {   
    if (signPassword()) {    
        let newUser = new User();
        let newUserJSON = JSON.stringify(newUser);
        localStorage.setItem(newUser.login, newUser.password);
        let userKey = `${newUser.login} | ${newUser.password}`;
        localStorage.setItem(userKey, newUserJSON);

        console.log(localStorage);
    }
    return true;
  }