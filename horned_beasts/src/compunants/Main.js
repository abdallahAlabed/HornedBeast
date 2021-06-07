import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json';

class Main extends React.Component {
  render() {
    return (
      <main>
        {data.map((val, index) => {
          return (
            <HornedBeast
              title={val.title}
              description={val.description}
              image_url={val.image_url}
              key={index}
            />
          )
        })}
      </main>
    );
  }
}
export default Main;