import { NavLink } from 'react-router-dom';
import {useSelector ,useDispatch} from 'react-redux';
import {  chekToNExtPage } from '../../Redux/List/Actions';


 function SingleSittingButton({titlebutton}) {
    const {isNext} = useSelector(state => state.list)
    const dispatch=useDispatch();

    return (
        <NavLink   to={isNext?'nextform':''}>
        <button 
          onClick={()=>{dispatch(chekToNExtPage(titlebutton));

         console.log(isNext,titlebutton)}} 
           className={`btn btn-${titlebutton} `}>
            {titlebutton} 
          </button>
          </NavLink>
    )
}


export default SingleSittingButton;


