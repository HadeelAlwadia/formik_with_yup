import React from 'react';
import {Field} from "formik";



function ReactSelect({name ,as ,error,options,placeholder}) {
    return (
        <Field>
            {
                (
                 { field: { value } ,form:{setFieldValue,setFieldTouched }}  
                )=>
             <>
                {as({value, setFieldValue, setFieldTouched ,name,options,placeholder})}
                {error&&<div className={'error'}>{error}</div>}
             </>
            }
            </Field>
    );
}

export default ReactSelect;