

 function InputFiled({
    type,
    name,
    placeholder,
    errors,
    touched,
    component='input'
}) {

    
    return (
        <>
         <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}

          />
     {errors&&touched ? <div className='error'>{errors}</div> : null}
        </>
    )
}
export default InputFiled;