import {
  HashRouter,
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
      <HashRouter>
              <Switch>
              
              <Route path={"/memory"} component={Memory} />
              <Route path={"/culture"} component={Culture} />
              <Route path={"/society"} component={Society} />
              <Route path={'/'} component={Home} />
            </Switch> 
            </HashRouter>
            </>
            
  );








}