export const setErrors = (Name, description)=>{
    let errors = {};
    errors.Name = Name?"":"Name is required" 
    errors.description = description?"":"Field required" 
    return errors;
}
