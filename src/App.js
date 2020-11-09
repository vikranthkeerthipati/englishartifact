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
              
              <Route exact path={"/englishartifact/#/memory"} component={Memory} />
              <Route exact path={"/englishartifact/#/culture"} component={Culture} />
              <Route exact path={"/englishartfiact/#/society"} component={Society} />
              <Route exact path={'/englishartifact/'} component={Home} />
            </Switch> 
            </HashRouter>
            </>
            
  );








}