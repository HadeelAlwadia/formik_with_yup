import InputFiled from "./InputFiled";

export default function InputsOfDatework({formik,values,errors,touched,label}) {
    return (
        <div className='Date-work'>
             <InputFiled placeholder=' start date '
        id="startdate"
        name="startdate"
        type="startdate"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={values.name}
        errors={errors.name }
         touched={touched.name}
        />
        
    <InputFiled placeholder='enddate '
        id="enddate"
        name="enddate"
        type="enddate"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={values.name}
        errors={errors.name }
         touched={touched.name}
        />
    <InputFiled
        id="currentwork"
        name="currentwork"
        type="checkbox"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={values.name}
        errors={errors.name }
         touched={touched.name}
        />
              <label>  {label} </label>
        </div>
    )
}
