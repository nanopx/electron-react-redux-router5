import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RepositoryList from '../components/RepositoryList';
import SearchStatus from '../components/SearchStatus';
import * as RepositoryActions from '../actions/repository';

function mapStateToProps(state) {
  return {
    repositories: state.repository,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(RepositoryActions, dispatch);
}

class Repositories extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.repositories.fetchedCount === 0) {
      this.props.repositorySearch();
    }
  }

  render() {
    return (
      <div className="Repositories">
        <SearchStatus {...this.props.repositories}/>
        <RepositoryList {...this.props.repositories}/>
		  </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Repositories);
