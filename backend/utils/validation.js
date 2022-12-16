import Joi from 'joi';

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
// firstName, lastName, email, password, isTAndCAccepted
const signupDataSchema =  Joi.object().keys({ 
    firstName: Joi.string().required(), 
    lastName: Joi.string().required(), 
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(), 
    isTAndCAccepted: Joi.boolean().truthy('Yes').required(), 
})

    export {
        isEmail,
        isValidNumber,
        signupDataSchema
    }