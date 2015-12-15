import React, { PropTypes } from 'react';

const SearchStatus = (props) => {
  const {fetchedCount, totalCount, isLoading, queries} = props;
  return (
    <div>
      <p>Status: {isLoading ? 'loading...' : 'loaded'}</p>
      <p>Top {fetchedCount} '{queries.language}' repositories created yesterday, sorted by {queries.sort}</p>
      <p>Total results found: {totalCount} repositories.</p>
    </div>
  );
};

SearchStatus.propTypes = {
  fetchedCount: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  queries: PropTypes.object.isRequired,
};

export default SearchStatus;
