import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ url, method, body }) => (
  <section>
    <h2>{method}</h2>
    <p>{url}</p>
    <p>{body}</p>
  </section>
);

HistoryItem.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default HistoryItem;
