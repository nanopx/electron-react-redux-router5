import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from 'redux-router5';

class Link extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    element: PropTypes.string,
    params: PropTypes.object,
    options: PropTypes.object,
    navigateTo: PropTypes.func.isRequired,
  }

  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  static defaultProps = {
    element: 'a',
    params: {},
    options: {},
  }

  constructor(props, context) {
    super(props);
    this.router = context.router;
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    this.props.navigateTo(this.props.name, this.props.params, this.props.options);
  }

  render() {
    const className = this.router.isActive(this.props.name, this.props.params) ? 'active' : '';
    const href = this.router.buildUrl(this.props.name);
    const Element = this.props.element;
    return <Element className={className} href={href} onClick={this.onClick}>{ this.props.children }</Element>;
  }
}


export default connect(
  (state) => state.router,
  (dispatch) => bindActionCreators({ navigateTo: actions.navigateTo }, dispatch)
)(Link);
