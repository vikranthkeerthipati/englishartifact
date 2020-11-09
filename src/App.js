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
import ScrollToTop from './components/ScrollToTop'
import WorksCited from './components/WorksCited'

export default function App() {


  return (
      <>

      <HashRouter>
       <ScrollToTop>
              <Switch>
              
              <Route path={"/memory"} component={Memory} />
              <Route path={"/culture"} component={Culture} />
              <Route path={"/society"} component={Society} />

              <Route path={"/workscited"} component={WorksCited} />
              <Route path={'/'} component={Home} />
            </Switch> 
            </ScrollToTop>
            </HashRouter>
        </>
            
  );








}