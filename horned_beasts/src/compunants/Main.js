import React from 'react';

class Main extends React.Component {
  render() {
    return (
      <div className="bigContainer">
       <main>
        <title>Rhino Family</title>
        <h2>description</h2>
        <p>Mother (or father) rhino with two babies</p>
        <h2>keyword</h2>
        <p>rhino</p>
        <h2>horns</h2>
        <p>2</p>
        <img
          src="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"
          alt="Rhino Family"
        />
      </main>
      </div>
    );
  }
}
export default Main;