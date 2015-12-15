import React, { Component, createElement } from 'react';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import radium, { Style } from 'radium';
import Helmet from 'react-helmet';
import rootStyle from './styles/rootStyle';
import Counter from './layouts/Counter';
import Home from './layouts/Home';
import NotFound from './layouts/NotFound';

const components = {
  home: Home,
  counter: Counter,
};

/**
 * Root component
 */
class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // NOTE: `this.props.state` is used by the server.
    const route = this.props.route || this.props.state;
    const segment = route ? route.name.split('.')[0] : undefined;
    return (
      <div className="Root">
        {/*
          * For <title> and <meta>, etc
          * See https://github.com/nfl/react-helmet
          */}
        <Helmet
          titleTemplate="boilerplate | %s"
          meta={[
            {name: 'description', content: 'Webapp using universal-react-redux-hapi'},
          ]} />
        {/*
          * Radium Style component, for global styles.
          */}
        <Style rules={rootStyle} />
        {createElement(components[segment] || NotFound)}
        {this.props.children ? this.props.children : null}
      </div>
    );
  }
}
Root = radium(Root);
export default connect(routeNodeSelector(''))(Root);
