import { Form, useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../Redux/List/Actions';
import AllInput from './InputsForm/AllInput';
import AllSelect from './SelectsForm/AllSelect';
import validateFormSchema from '../../Utils/Validation/FormSchema';
import { initialValues } from './initialValuesOfForm';

export function ReactForm () {
  const dispatch=useDispatch();
  const {initialValuesOfForm} = useSelector((state) => state.dataReducer);

  // A custom validation function. This must return an object

  // which keys are symmetrical to our values/initialValues
 
  const validate  = values => {
    const errors = {}

    if (!values.name) {
      errors.name = 'Required'
    } 
    
    if (!values.address) {
      errors.address = 'Required'
    } 
    
    if (!values.size) {
      errors.size = 'Required'
    } 
    
    if (!values.sector) {
      errors.sector = 'Required'
    } 
    if (!values.description) {
      errors.description = 'Required'
    }
    if (!values.supervisorname) {
      errors.supervisorname = 'Required'
    }
    if (!values.supervisorofemployeesbyyou) {
      errors.supervisorofemployeesbyyou = 'Required'
    }
    
    if (!values.reasonofleaving) {
      errors.reasonofleaving = 'Required'
    }
    
    if (!values.startsalary) {
      errors.startsalary = 'Required'
    }
    if (!values.currentsalary) {
      errors.currentsalary = 'Required'
    }
    if (!values.startdate) {
      errors.startdate = 'Required'
    }
    if (!values.enddate) {
      errors.enddate = 'Required'
    }
    
    
    return errors
  }
  

  const formik = useFormik({

    initialValues: initialValuesOfForm,

    validate,

    onSubmit: values => {
      dispatch(addItem(
        {id:Math.random(),
           name:values.name ,
           address:values.address,
           sector:values.sector,
           description:values.description,
           supervisorname:values.supervisorname,
           reasonofleaving:values.reasonofleaving
          }))
    },
  })

  return (
  <div>
    <form onSubmit={formik.handleSubmit}>
       <AllSelect />

    <textarea placeholder='description'
        id="description"
        name="description"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.description} />
        

        <AllInput  formik={formik} values={formik.values}  errors={formik.errors} touched={formik.touched} /> 
      <button type="submit">save</button>
    </form>
  </div>)
}


