import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HistoryItem from './HistoryItem';

describe('HistoryItem component', () => {
  afterEach(() => cleanup());
  it('renders HistoryItem component', () => {
    const { asFragment } = render(
      <HistoryItem
        url="https://anapioficeandfire.com/api/characters/583"
        method="GET"
        body="This is the body"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
