export default function isUser(login, password) {
  if ( password === localStorage[login]) {
    console.log('isUser - true');
    return true;
  }
  
  console.log('isUser - false');
  return false;
}