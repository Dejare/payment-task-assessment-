
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PurchaseComplete from "./component/PurchaseComplete";
import Home from "./Home";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/complete">
          <PurchaseComplete />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
