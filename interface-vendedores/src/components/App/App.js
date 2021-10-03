import './App.css';
import Create from '../create/create';
import Read from '../read/read';
import Update from '../update/update';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="main">
        <div className="target">
          <h2 className="main-header">Información Vendedores</h2>
          <div>
            <Route exact path='/registrar-vendedor' component={Create} />
          </div>
          <div style={{ marginTop:20 }}>
            <Route exact path='/' component={Read} />
          </div>
          <Route path='/actualizar-info-vendedor' component={Update} />
        </div>
      </div>
    </Router>
  );
}

export default App;
