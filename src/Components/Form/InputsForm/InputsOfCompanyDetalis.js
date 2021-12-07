import React from 'react'
import InputFiled from './InputFiled'

export default function InputsOfCompanyDetalis({formik,values,errors,touched,label}) {
    return (
        <div  className='InputsOfCompanyDetalis'>
            <label> {label} </label>
     
     <InputFiled placeholder='company name '
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={values.name}
        errors={errors.name }
          touched={touched.name}
        />

<InputFiled placeholder='company address '
        id="address"
        name="address"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.address}
        errors={formik.errors.address }
          touched={formik.touched.address}
        />
  
      <InputFiled placeholder='company size '
        id="size"
        name="size"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.address}
          errors={formik.errors.size }
          touched={formik.touched.size}
        />

      <InputFiled placeholder='company sector '
        id="sector"
        name="sector"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.address}
        errors={formik.errors.sector }
          touched={formik.touched.sector}
        />

      <InputFiled placeholder='supervisor name' 
        id="supervisorname"
        name="supervisorname"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.address}
        errors={formik.errors.supervisorname }
          touched={formik.touched.supervisorname}
        />
        
      <InputFiled placeholder='supervisor of employees by you' 
        id="supervisorofemployeesbyyou"
        name="supervisorofemployeesbyyou"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.address}
        errors={formik.errors.supervisorofemployeesbyyou }
          touched={formik.touched.supervisorofemployeesbyyou}
        />

      <InputFiled placeholder='reason of leaving' 
        id="reasonofleaving"
        name="reasonofleaving"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={values.address}
        errors={errors.reasonofleaving }
          touched={touched.reasonofleaving}
        />
  
    

        </div>
    )
}
