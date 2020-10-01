import React from 'react';
import { mount, shallow } from 'enzyme';
import Heart from '../client/src/components/Heart.jsx';

describe('Heart', () => {
  const wrapper = shallow(<Heart />);

  it('button renders', () => {
    expect(wrapper.exists('#heartButton')).toBe(true);
  });

  it('svg renders', () => {
    expect(wrapper.exists('#heartsvg')).toBe(true);
  });
});
