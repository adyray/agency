import './_css/App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import main from "./main"
import about from "./about"
import work from "./projects"
import blogs from "./blogs"


function App() {
  

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={main}></Route>
          <Route path="/about" component={about}></Route>
          <Route path="/work" component={work}></Route>
          <Route path="/blogs" component={blogs}></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
