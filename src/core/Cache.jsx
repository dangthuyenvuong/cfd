import { useState } from "react";
import { useLocation } from "react-router-dom";
import SessionStorage from "./SessionStorage";

let store = {}

export function get(name, callback) {

    let data = store?.[name] ?? null;

    if (!data) {
        data = callback();
    } else {
        return data;
    }

    store[name] = data;
    return store[name];
}

export function useCache(name, defaultValue) {
    let data = defaultValue;

    let location = useLocation();
    if (name in store) {
        data = store[name]
    } else if (typeof location.state === 'object' && (name in location.state)) {
        data = location.state[name]
    }else{
        let session = SessionStorage.get(name);
        if(session){
            data = session
        }
    }

    let [state, setState] = useState(data);

    function updateState(value) {
        SessionStorage.set(name, value);
        store[name] = value;
        setState(value)
    }

    return [state, updateState];
}
