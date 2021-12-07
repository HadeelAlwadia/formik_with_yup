import React from 'react';
import SingleData from './SingleData';
import  {useSelector} from 'react-redux';


export default function Data({data , handeldeleteitem}) {
const {list} = useSelector((state) => state.dataReducer);

    return (
        <div>
            {list.map(item=>{return <SingleData  key={item.id.toString()}  
            infodata={item}   />})}
        </div>
    )
}


