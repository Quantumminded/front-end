import { useCookies } from 'react-cookie';


 
function useCookie() {
    const [cookies, setCookie] = useCookies(['token']);
    console.log(cookies)  
    return cookies;
  }

  export {useCookie}