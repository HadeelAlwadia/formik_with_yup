import {  useSelector } from "react-redux";
import ReactForm from "../Components/ReactForm/ReactForm";
import List  from "../Components/List/List";
import SittingButtons from "../Components/SittingButtons/SittingButtons";






function JobForm() {
 const list = useSelector(state => state.list)
console.log(list.list)
console.log(list.isNext)



  return (
    <div className="work-experine-mainform">
    <List/>
    <ReactForm/>
    <SittingButtons/>
      
    </div>
  );
}

export default JobForm;