import React, {Component} from 'react';
import Navigation from '../components/Nav/Navigation';



class IndexPage extends Component {

   

  render() {
    return (
      <div className="App">
        <div className="container-fluid p-0">
          <Navigation />
        </div>
      </div>
    )
  }
}

export default IndexPage;