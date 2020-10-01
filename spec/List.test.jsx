import React from 'react';
import { mount, shallow } from 'enzyme';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import List from '../client/src/components/List.jsx';

describe('List', () => {
  const wrapper = shallow(<List />);

  it('title renders', () => {
    expect(wrapper.exists('#title')).toBe(true);
  });

  it('have Item as a prop', () => {
    expect(wrapper.find('#item')).toHaveProp('item');
  });

  it('should call handleClickNext when clicked', () => {
    const wrapper = mount(<List />);
    sinon.spy(wrapper.instance(), '_handleClickNext');
    wrapper.update();
    wrapper.find('#nextButton').simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
