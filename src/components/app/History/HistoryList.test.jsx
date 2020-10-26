import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HistoryList from './HistoryList';

describe('HistoryList component', () => {
  afterEach(() => cleanup());
  it('renders HistoryList component', () => {
    const { asFragment } = render(
      <HistoryList
        history={[
          {
            url: 'https://anapioficeandfire.com/api/characters/583',
            method: 'GET',
            body: 'This is the body'
          }
        ]}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
