// setting item from localStorage

export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

// gettin item from localStorage

export const getLocalStorage = key => {
    return JSON.parse(localStorage.getItem(key));
}

//delete item from localStorage

export const deleteLocalStorage = key => {
    localStorage.removeItem(key);
}
