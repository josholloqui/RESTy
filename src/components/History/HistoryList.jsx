import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const HistoryList = ({ history }) => (
  <ul>
    {history.map(item => (
      <li key={`${item.url}`} >
        <HistoryItem url={item.url} method={item.method} body={item.body} />
      </li>
    ))}
  </ul>
);

HistoryList.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })).isRequired
};

export default HistoryList;
