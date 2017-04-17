import React, { Component } from 'react';
import router from './routes';
import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
          <br/>
          {router}
        <h3 className='center-align'>footer</h3>
      </div>
    );
  }
}

export default App;
