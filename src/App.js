
import { Route, Switch   } from "react-router-dom";
import './App.css';
import JobForm from "./Screens/JobForm";
import SecondForm from './Screens/SecondForm';


export default function App() {
  return (
    <div>
        <Switch>
        <Route exact path="/"  component={JobForm} />

        <Route  exact path="/nextform"  component={SecondForm} />
        </Switch>
        
    </div>
  )
}
