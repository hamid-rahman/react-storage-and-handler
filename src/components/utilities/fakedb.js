// use local storage to manage cart data

const addToDb = (id,name)=> {
    localStorage.setItem(id, name)
}