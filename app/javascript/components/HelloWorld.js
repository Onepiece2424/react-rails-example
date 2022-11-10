import React from "react"
import PropTypes from "prop-types"
class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      greeting: ''
    };
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            greeting: result.greeting
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  render () {
    const { error, greeting } = this.state;
    return (
      <React.Fragment>
        Greeting: {greeting}
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
