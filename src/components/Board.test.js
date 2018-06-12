import React from 'react';
import { shallow } from 'enzyme';
import Board from './Board';

describe('Board', () => {
  test('it can be rendered', () => {
    const wrapper = shallow(<Board/>);

    expect(wrapper).toMatchSnapshot();
  });
});
