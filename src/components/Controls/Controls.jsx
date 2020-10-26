import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ url, method, body, onChange, onSubmit }) => (
  <div>
    <form onSubmit={onSubmit} >
      <label htmlFor="url" >URL</label>
      <input
        id="url"
        type="text"
        name="url"
        value={url}
        onChange={onChange}
      />
      <section>
        <div>
          <label htmlFor="post" >POST</label>
          <input
            id="post"
            type="radio"
            name="method"
            value="POST"
            checked={method === 'POST'}
            onChange={onChange}
          />
          <label htmlFor="get" >GET</label>
          <input
            id="get"
            type="radio"
            name="method"
            value="GET"
            checked={method === 'GET'}
            onChange={onChange}
          />
          <label htmlFor="put" >PUT</label>
          <input
            id="put"
            type="radio"
            name="method"
            value="PUT"
            checked={method === 'PUT'}
            onChange={onChange}
          />
          <label htmlFor="patch" >PATCH</label>
          <input
            id="patch"
            type="radio"
            name="method"
            value="PATCH"
            checked={method === 'PATCH'}
            onChange={onChange}
          />
          <label htmlFor="delete" >DELETE</label>
          <input
            id="delete"
            type="radio"
            name="method"
            value="DELETE"
            checked={method === 'DELETE'}
            onChange={onChange}
          />
        </div>
        <button>Submit</button>
      </section>
      <textarea
        placeholder="Raw JSON Body"
        name="body"
        value={body}
        onChange={onChange}
      />
    </form>
  </div>
);

Controls.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Controls;
