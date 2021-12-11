const localStorageKeyName = 'recordList'
const model={
    clone(data){
        return JSON.parse(JSON.stringify(data));
    },
    fetch (){
       return JSON.parse(window.localStorage.getItem(localStorageKeyName))
    },
    save(data){
        window.localStorage.setItem(localStorageKeyName,JSON.stringify(data))
    }
}
export {model}