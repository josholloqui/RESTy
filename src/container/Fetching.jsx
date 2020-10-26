import React, { Component } from 'react';
import HistoryList from '../components/History/HistoryList';
import Controls from '../components/Controls/Controls';
import Display from '../components/Display/Display';
import { fetchAPI } from '../service/fetch-API';

export default class Fetching extends Component {
  state = {
    url: '',
    method: '',
    body: '',
    history: [],
    display: {}
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleFetch = () => {
    const { url, method, body } = this.state;

    return fetchAPI(url, method, body)
      .then(res => this.setState({ display: res }));
  }

  handleSubmit = async(event) => {
    event.preventDefault();

    await this.handleFetch();

    return this.setState({
      history: [...this.state.history, {
        url: this.state.url,
        method: this.state.method,
        body: this.state.body
      }]
    });
  }

  render() {
    const { url, method, body, display, history } = this.state;

    return (
      <>
        <div>
          <section>
            <header>Header</header>
            <HistoryList history={history} />
          </section>

          <section>
            <Controls
              url={url}
              method={method}
              body={body}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            />
            <Display
              display={display}
            />
          </section>
        </div>
      </>
    );
  }
}
