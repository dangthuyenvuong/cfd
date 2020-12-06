import { useState } from "react";

const patternEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const patternPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const patternUrl = /https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/gi;

export default function useValidateForm(initValue, rule) {

    let [form, setForm] = useState(initValue)

    let [error, setError] = useState({})

    function inputChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value.trim()
        })
    }

    function handleSubmit() {
        let { validate, message } = rule;
        let errorObj = {}
        for (let i in validate) {
            if (i in form) {
                if (validate[i].required) {
                    if (!form[i]) {
                        errorObj[i] = message?.[i]?.required || 'Truong nay la bat buoc'
                    }
                }
                
                if (validate[i].pattern) {

                    let pattern = validate[i].pattern
                    if (validate[i].pattern === 'email') pattern = patternEmail;
                    if (validate[i].pattern === 'phone') pattern = patternPhone;
                    if (validate[i].pattern === 'url') pattern = patternUrl;

                    if (!pattern.test(form[i])) {
                        errorObj[i] = message?.[i]?.pattern || 'khong dung dinh dang'
                    }
                }
            }
        }

        setError(errorObj)
        return Object.keys(errorObj).length > 0;
        
    }

    return {
        data: form,
        error,
        inputChange,
        setError,
        onSubmit: handleSubmit
    }
}