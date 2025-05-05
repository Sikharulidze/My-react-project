import * as yup from "yup";

 const loginSchema = yup.object().shape({
    name :  yup.string().trim().max(12).required(),
    password: yup.string().trim().min(8).required()
 });  

 export default loginSchema;