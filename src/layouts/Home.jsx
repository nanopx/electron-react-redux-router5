import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { routeNodeSelector } from 'redux-router5';
import Link from '../containers/Link';
import Repositories from '../containers/Repositories';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  style = {
    button: {
      color: 'red',
    },
  };

  render() {
    return (
      <div className="Home">
        {/*
          * See: https://github.com/nfl/react-helmet
          */}
        <Helmet title="Home" />
        Home
        <Link name="home" options={{ replace: true }}>home</Link>
				<Link name="counter" options={{ replace: true, reload: true }}>counter</Link>
        <Repositories />
		  </div>
    );
  }
}

/**
 * Set the routeNode
 * See: https://github.com/router5/redux-router5#routenodeselector
 */
export default connect(routeNodeSelector('home'))(Home);
