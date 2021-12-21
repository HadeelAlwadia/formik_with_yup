import { Field } from 'formik'
import { useState } from 'react';


export default function FormInput({value , type,  name ,component='input',placeholder ,error,touched}) {
    const [isFoucs, setIsFocus] = useState(false);

    return (
       <>
             <Field component={component} 
             value={value}
              name={name}
              type={(isFoucs && name==='startDate')||(isFoucs&&name==='endDate')?'date':type}
               placeholder={placeholder} 
               onFocus={() => setIsFocus(true)}

                   />
           { error && touched ? <span className='error'>{error}</span> : null}
       </>
    )
}
