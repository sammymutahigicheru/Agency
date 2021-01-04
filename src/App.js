import PageWrapper from './components/PageWrapper';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
function App() {
  return (
    <PageWrapper>
      <Router>
        <Route
          pathv="/home"
          component={Home}
        />
      </Router>
    </PageWrapper>
  );
}

export default App;
