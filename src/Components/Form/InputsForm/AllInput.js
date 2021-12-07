import InputsOfCompanyDetalis from './InputsOfCompanyDetalis';
import InputsOfCompensation from './InputsOfCompensation';
import InputsOfDatework from './InputsOfDatework';


export default function AllInput({formik,values,errors,touched }) {
    return (
        <div className='inputs-form'>
           <InputsOfDatework formik={formik} values={values}  errors={errors} touched={touched} label='current work' /> 
           <InputsOfCompanyDetalis formik={formik} values={values}  errors={errors} touched={touched} label='company details' /> 
           <InputsOfCompensation formik={formik} values={values}  errors={errors} touched={touched} label='compensation' /> 

        </div>
    )
}
