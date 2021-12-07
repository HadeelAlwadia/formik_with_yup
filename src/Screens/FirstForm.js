
import Data from '../Components/Data/Data';
import { ReactForm } from '../Components/Form/ReactForm';
import SittingButtons from '../Components/SittingButtons/SittingButtons';


function FirstForm() {


  return (
    <div className="app">
      <Data/>
      <ReactForm/>
      <SittingButtons />
    </div>
  );
}


export default FirstForm;
