import { ADD_ITEM, CHEK_TO_NEXT_PAGE, DELETE_ITEM, UPDITE_OF_ITEM } from "./Constants";

export const addItem=(item)=>(
{
 type:ADD_ITEM ,
payload:item
    
})

export const  deleteItem=(idOfItem)=>(
    {
    type:DELETE_ITEM,
    payload:idOfItem
   })


export  const chekToNExtPage=(titlebutton)=>(
    {
        type:CHEK_TO_NEXT_PAGE,
        payload:titlebutton
        
    }
)

export const upditeOfItem=(idOfItem)=>(
    {
        type:UPDITE_OF_ITEM,
        payload:idOfItem
    }
)