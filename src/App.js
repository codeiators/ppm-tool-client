import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import AddProject from './components/project/AddProject';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
<Provider store={store}>
    <Router>
    <div className="App">
         <Header/>
        
         <Route path="/dashboard" component={Dashboard} />
        <Route path="/addProject" component={AddProject} />
        
    </div>
    </Router>
    </Provider>
  );
}

export default App;
