import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../client/src/components/App';

let describe;
let expect;
let it;

describe('<App />', () => {
  it('assert checked', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('#title')).toExist();
    // expect(wrapper.find("#not")).not.toBeChecked();
  });
});
