import PageWrapper from './components/PageWrapper';
import Home from './components/pages/Home';
import About from './components/pages/About';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';

import AdminWrapper from './components/AdminWrapper';

function App() {
  return (
    <Router>

      <Route 
      path = "/admin"
      render = {props =>{
        <Login />
      }}
      />



      <PageWrapper>

        <Route
          exact = {true}
          path="/"
          component={Home}
        />

        <Route
          path="/about"
          component={About}
       />

       <Route 
       path = "/contact"
       component = {Contact}
      />
  
      </PageWrapper>
    </Router>
    
  );
}

export default App;
