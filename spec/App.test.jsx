import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../client/src/components/App.jsx';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('App renders', () => {
    expect(wrapper.exists('#App')).toBe(true);
  });

  it('List renders', () => {
    expect(wrapper.exists('#List')).toBe(true);
  });
});
