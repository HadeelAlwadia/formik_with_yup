import { DELETE_ITEM_FROM_DATA_LIST,ADD_ITEM_To_DATA_LIST, Chek_Is_Go_Next, UPDITE_ITEM_FROM_DATA_LIST,} from './Constants';

const deletItem=(id)=>({
    type:DELETE_ITEM_FROM_DATA_LIST,
    payload:id
});
const addItem=(item)=>({
    type:ADD_ITEM_To_DATA_LIST,
    payload:item
});

const   chekisgonext =(titlebutton)=>({
    type:Chek_Is_Go_Next,
    payload:titlebutton
}) 

const upditeitemamely =(id)=>({
    type:UPDITE_ITEM_FROM_DATA_LIST,
    payload:id

})

export{
    deletItem,
    addItem,
    chekisgonext
}

