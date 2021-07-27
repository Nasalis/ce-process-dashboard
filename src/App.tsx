import './App.css';
import { GlobalHeader } from './components/GlobalHeader';
import { GlobalFooter } from './components/GlobalFooter';
import { Home } from './components/Home';
import { ChartPage } from './components/ChartPage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalHeader/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/chart" exact component={ChartPage} />
        </Switch>
        <GlobalFooter/>
      </div>
    </Router>
  );
}

export default App;
