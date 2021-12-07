import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {useSelector ,useDispatch} from 'react-redux';
import { chekisgonext } from '../../Redux/List/Actions';


 function SingleSittingButton({titlebutton}) {
    const {isnext} = useSelector(state => state.dataReducer)
    const dispatch=useDispatch();

 

    return (
          <button className='btn'  onClick={()=>{dispatch(chekisgonext(titlebutton));  console.log(isnext)}}  >
              <NavLink    to={isnext?'nextform':''}> 
                   {titlebutton}
             </NavLink>
          </button>
    )
}



export default SingleSittingButton;


