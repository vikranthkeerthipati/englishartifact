import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EngNavbar from './components/EngNavbar';
import AvaliableOptions from './components/AvaliableOptions'
import Home from './components/Home'

export default function App() {
  return (
    <Router>
      <>
      <EngNavbar color="black"/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
            <AvaliableOptions />
          </Route>
        </Switch>

      </>
    </Router>
  );
}


function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


