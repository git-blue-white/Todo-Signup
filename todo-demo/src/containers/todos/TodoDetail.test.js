import React from 'react';
import { shallow } from 'enzyme';
import TodoDetail from './TodoDetail';

describe('todos/TodoDetail', () => {
  let todo;

  beforeEach(() => {
    todo = {
      id: 1,
      userId: 1,
      title: 'test title',
      completed: false
    };
  })

  it('should render without error', () => {
    const wrapper = shallow(<TodoDetail todo={todo} />);

    expect(wrapper.text()).toContain('test title')
  });

  it('should add completed class when todo is completed', () => {
    const wrapper = shallow(<TodoDetail todo={{ ...todo, completed: true }} />);

    expect(wrapper.find('.completed')).toHaveLength(1);
  })
});
