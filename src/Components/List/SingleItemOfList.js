import React from 'react';
import {useDispatch} from 'react-redux';
import { deleteItem, upditeOfItem }  from '../../Redux/List/Actions';
import { FaTrashAlt ,FaEdit } from 'react-icons/fa';

 function SingleItemOfList({dataOfItem}) {
    const dispatch=useDispatch();

    return (
         <div className='SingleData'>
            <h3 className='title-SingleData'>{dataOfItem.nameCompany}</h3>
            <h4 className='data-SingleData'>{dataOfItem.startDate}</h4>
            <div>
                <FaEdit     className=' icon editicon ' 
                  onClick={ () => {dispatch( upditeOfItem(dataOfItem.idItem)); console.log('upditeOfItem')} }/>
                <FaTrashAlt  className='icon deleteicon'  
                 onClick={ () => {dispatch( deleteItem(dataOfItem.idItem) ) ;   console.log('deleteItem')} }/> 
            </div>
        </div>
    )
}



export default SingleItemOfList;

