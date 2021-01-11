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
      render = {props =>(
        <AdminWrapper>
           <Login />
        </AdminWrapper>
       
      )}
      />

        <Route
          exact = {true}
          path="/"
          render={props =>(
           <Home {...props} />
            )}
        />

        <Route
          path="/about"
          render={props =>(
            <About {...props} />
             )}
       />

       <Route 
       path = "/contact"
       render={props =>(
        <Contact {...props} />
         )}
      />
  
    </Router>
    
  );
}

export default App;
