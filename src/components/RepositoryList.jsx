import React, { PropTypes } from 'react';

const RepositoryList = (props) => {
  const {repositories, users} = props;

  const repoList = Object.keys(repositories).map((repositoryId) => {
    const repository = repositories[repositoryId];
    const user = users[repository.owner];
    return (
      <li key={repositoryId}>
        <h3><a href={repository.url}>{repository.name}</a> : by <a href={user.url}>{user.login}</a> : {repository.stargazers_count} stars</h3>
        <p>{repository.description || 'No description'}</p>
      </li>
    );
  });

  return (
    <ul>{repoList}</ul>
  );
};

RepositoryList.propTypes = {
  repositories: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
};

export default RepositoryList;
