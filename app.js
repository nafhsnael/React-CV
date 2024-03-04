import React from 'react';
import Utama from './utama';
import { Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <div class="b-example-divider">
          <header class="p-3 mb-3 border-bottom">
            <div class="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-start">
              <div class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <h4>Nafhs.nael</h4>
                <Link to="/beranda" class="nav-link px-2 link-dark">Home</Link>
                <Link to="/tentangsaya" class="nav-link px-2 link-dark">Profile</Link>
                <Link to="/karya" class="nav-link px-2 link-dark">Karya</Link>
                <Link to="/kontak" class="nav-link px-2 link-dark">Conntact</Link>
              </div>
            </div>
          </header>
        </div>
        <p><Utama /></p>
      </div>
    );
  }
}

export default App;

