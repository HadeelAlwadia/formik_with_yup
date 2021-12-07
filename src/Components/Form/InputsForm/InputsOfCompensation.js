import React from 'react'
import InputFiled from './InputFiled'

export default function InputsOfCompensation({formik,values,errors,touched,label}) {
    return (
        <div  className='InputsOfCompensation'>
            <label>{label}</label>
        <InputFiled placeholder='start salary' 
        id="startsalary"
        name="startsalary"
        type="numer"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={values.address}
        errors={errors.startsalary }
          touched={touched.startsalary}
        />
        <InputFiled placeholder='end salary' 
        id="endsalary"
        name="endsalary"
        type="numer"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={values.address}
        errors={errors.startsalary }
          touched={touched.startsalary}
        />
          <InputFiled placeholder='current salary' 
        id="currentsalary"
        name="currentsalary"
        type="numer"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={values.address}
        errors={errors.startsalary }
          touched={touched.startsalary}
        />
      
        </div>
    )
}
