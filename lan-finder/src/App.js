import React, { Component } from 'react';
import router from './routes'


class App extends Component {
  render() {
    return (
        <div>
            <h1>NavBar</h1>
            {/*navbar*/}
            <br/>
            {router}
            <h3 className='center-align'>footer</h3>
        </div>
    );
  }
}

export default App;
