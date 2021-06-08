import React from 'react';
import Header from "./compunants/Header.js";
import Main from "./compunants/Main.js";
import Footer from "./compunants/Footer.js";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render() {
    return (
      <div className="bigContainer">
       <Header />
        <Main />
        <Footer />
        
      </div>
    );
  }
}
export default App;

