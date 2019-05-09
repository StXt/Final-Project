import User from './User';
import signPassword from './signPassword';

export default function addUser(e)  {   
    if (signPassword()) {    
        let newUser = new User();
        let newUserJSON = JSON.stringify(newUser);
        localStorage.setItem(newUser.login, newUser.password);
        
        console.log(localStorage);
    }
  }