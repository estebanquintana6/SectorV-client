export function isEmail(value) {
    let flag = false; 
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value))
        flag = true;
    return flag;
}

export function hasSpecialChars(value){
    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if(format.test(value)){
        return true;
    } else {
        return false;
    }
}

export function isNumber(value){  
    return !isNaN(value)
}

export function isString(value){
    return isNaN(value)
}

export function isPhone(value){  
    if(value){
        if(value.length == 10){
            console.log("10 digitos");
            return true;
        }else{
            console.log("menos de 10 digitos");
            return false;
        }
    }else{
        return false;
    }
}

export function isEmpty(value){
    if(value){
        if(value = ''){
            return true;
        }else{
            return false;
        }
    }else{
        return true;
    }
}