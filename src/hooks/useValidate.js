import { useState } from "react";

const emailPattern = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
const phonePattern = /(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/

export default function useValidate(initform, rule) {

    let [form, setForm] = useState(initform)

    let [error, setError] = useState({});

    function handelSubmit(e) {
        e.preventDefault()
        let errorObj = {}

        for(let i in rule.validate){
            if(i in form){
                
                let fieldRule = rule.validate[i]
                
                if(fieldRule.required){
                    if(form[i] === ''){
                        errorObj[i] = rule?.message?.[i]?.required || 'Trường này là trường bắt buộc'
                    }
                }

                if(fieldRule.pattern){
                    let pattern = fieldRule.pattern;
                    if(fieldRule.pattern === 'email')   pattern = emailPattern;
                    if(fieldRule.pattern === 'phone')   pattern = phonePattern;
                    
            
                    if (!(pattern.test(form[i]))) {
                        errorObj[i] = rule?.message?.[i]?.pattern || 'Trường không đúng định dạng'
                    }
                }
            }
        }

        setError(errorObj)
    }

    function inputOnChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value.trim()
        })
    }


    return {
        data: form, error, handelSubmit, inputOnChange
    }
}