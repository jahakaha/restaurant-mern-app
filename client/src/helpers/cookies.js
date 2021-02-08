import Cookies from 'js-cookie';

//setting item from Cookies

export const setCookie = (key, value) => {
    Cookies.set(key, value, { expires: 1 })
}

//getting item from Cookies

export const getCookie = key => {
    Cookies.get(key);
}

//deleting item from Cookies

export const deleteCookie = key => {
    Cookies.remove(key);
}