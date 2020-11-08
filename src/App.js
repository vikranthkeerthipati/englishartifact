import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import Home from './components/Home'
import { animated,useTransition } from "react-spring";
import Memory from './components/Memory';

export default function App() {


  return (
      <>
              <Switch>
              
              <Route path="/memory" component={Memory} />
              <Route path="/culture" component={Culture} />
              <Route path="/habits" component={Memory} />
              <Route path="/" component={Home} />
            </Switch> 

            </>
  );





function Culture() {
  return <h2>Your dad</h2>;
}

function Habits(){
  return<h2>Your sis</h2>
}
}