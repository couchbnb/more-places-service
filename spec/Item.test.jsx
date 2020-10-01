import React from 'react';
import { mount, shallow } from 'enzyme';
import Item from '../client/src/components/Item.jsx';

describe('Item', () => {
  const wrapper = shallow(<Item />);

  it('frame renders', () => {
    expect(wrapper.exists('#Frame')).toBe(true);
  });

  it('Heart renders', () => {
    expect(wrapper.exists('#heart')).toBe(true);
  });
  it('upleft renders', () => {
    expect(wrapper.exists('#upleft')).toBe(true);
  });
  it('upright renders', () => {
    expect(wrapper.exists('#upright')).toBe(true);
  });

});