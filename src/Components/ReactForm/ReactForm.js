
import { Formik   } from 'formik';
import { addItem } from '../../Redux/List/Actions';
import {addFormSchema} from '../../Utils/Validation'
import { useDispatch, useSelector } from 'react-redux';
import { CustamForm } from './Form';




const checkIdItem=(values)=>{
  return values.idItem=values.idItem===0?values.idItem=Math.random():values.idItem ;
   

}
 

export default function ReactForm() {

    const {valueOfForm} = useSelector(state => state.list)
    console.log(valueOfForm.idItem,valueOfForm)
    
    const dispatch = useDispatch();


 
    const onSubmit =  (values, {resetForm}) => {
      checkIdItem(values);
      console.log(values.idItem,values)
      alert(JSON.stringify(values));
      dispatch(addItem(values));
      resetForm({})
    }

    return (
        <Formik 
         initialValues={valueOfForm}
         validationSchema={addFormSchema}

          onSubmit={onSubmit}
           
           
           
           

          
         >
             {CustamForm}

         </Formik>
    )
}
