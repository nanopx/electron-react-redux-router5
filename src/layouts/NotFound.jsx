import React, { Component } from 'react';
import Link from '../containers/Link';

class NotFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="NotFound">
        NotFound
				<Link name="home" options={{ reload: true }}>home</Link>
		  </div>
    );
  }
}

export default NotFound;
