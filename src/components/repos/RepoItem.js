import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <div className='card'>
      <div>
        <h3>
          <a href={repo.html_url}>{repo.name}</a>
        </h3>
        <div className='badge badge-light'>Updated</div>
        {repo.updated_at
          ? repo.updated_at
              .split('T')[0]
              .split('-')
              .reverse()
              .join('/')
          : ''}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div className='badge badge-light'>Language</div> {repo.language}
      </div>
      <div>
        <div className='badge badge-light'>Description</div>
        {repo.description}
      </div>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
