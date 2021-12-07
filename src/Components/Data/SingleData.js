import React from 'react';
import {useDispatch} from 'react-redux';
import { deletItem }  from '../../Redux/List/Actions';

import { FaTrashAlt ,FaEdit } from 'react-icons/fa';

 function SingleData({infodata}) {
    const dispatch=useDispatch();

    return (
        <div className='SingleData'>
            <h3 className='title-SingleData'>{infodata.title}</h3>
            <h4 className='data-SingleData'>{infodata.data}</h4>
            <div>
               <FaEdit  className=' icon editicon '/>
               <FaTrashAlt className='icon deleteicon' onClick={
                   ()=>{dispatch(deletItem)}
               } /> 
            </div>
        </div>
    )
}



export default SingleData;

