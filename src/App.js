import './App.css';
import Login from './component/Login'
import Auth from './component/Authentication'
import 'bootstrap/dist/css/bootstrap.min.css'
// import PrivateRoute from './component/PrivateRoute'
import Dashboard from './component/Dashboard'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">

   <Router>
   <Switch>
   <Route exact path="/login" component={Login} />
   <Route exact path="/auth" component={Auth} />\
   <Route exact path="/dashboard" component={Dashboard} />
   <Route exact path="/" component={Login} />



    </Switch>
   </Router>



    </div>
  );
}

export default App;
