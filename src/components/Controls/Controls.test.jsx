import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Controls from './Controls';

describe('Controls component', () => {
  afterEach(() => cleanup());
  it('renders Controls component', () => {
    const { asFragment } = render(
      <Controls 
        url="https://anapioficeandfire.com/api/characters/583"
        method="GET"
        body=""
        onSubmit={() => {}}
        onChange={() => {}}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
