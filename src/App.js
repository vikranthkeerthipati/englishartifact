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
import Culture from './components/Culture'
import Society from './components/Society'

export default function App() {


  return (
      <>
              <Switch>
              
              <Route path={process.env.PUBLIC_URL+"/memory"} component={Memory} />
              <Route path={process.env.PUBLIC_URL+"/culture"} component={Culture} />
              <Route path={process.env.PUBLIC_URL + "/society"} component={Society} />
              <Route path={process.env.PUBLIC_URL+'/'} component={Home} />
            </Switch> 

            </>
  );








}