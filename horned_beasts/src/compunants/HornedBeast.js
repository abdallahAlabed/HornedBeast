import React from 'react';
class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vote: 0
    }

  }
 
  votes = () => {
    let x = this.state.vote;
    x++;
    this.setState({ vote: x });
  }
  render() {
    return (
      <div>
        <title>{this.props.title}</title>
        <p>{this.props.description}</p>
        <img src={this.props.image_url} alt="" onClick={this.votes} />
        <p>{this.state.vote}</p>
      </div>
    );
  }
}
export default HornedBeast;
