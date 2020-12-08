import Hook from "./Hook";


export default {
    get: (name) => {
        try{
            let data = JSON.parse(sessionStorage.getItem(name));

            Hook.doAction('getSessionStorage_' + name, data);
            return data
        }catch(err){
            return null;
        }
    },
    set: (name, value) =>{
        if(typeof value !== undefined){
            sessionStorage.setItem(name, JSON.stringify(value))
            Hook.doAction('setSessionStorage_' + name, value);
            return true;
        }
        return false;
    }
}