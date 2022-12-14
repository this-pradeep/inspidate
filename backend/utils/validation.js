const isEmail = (email) =>{
    const regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    if (!email.match(regexEmail)) {
        return false
    } 
    return true;

}


const isValidNumber = (number) =>{
    const regexNumber = /^\d*$/;
    if (regexNumber.test(number)) {
        return true;
    }    
    return false;
}
export {
    isEmail,
    isValidNumber
}