import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Display from './Display';

describe('Display component', () => {
  afterEach(() => cleanup());
  it('render Display component', () => {
    const { asFragment } = render(
      <Display
        display={
          {
            'JSON': [{
              '': ''
            }]
          }
        }
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
