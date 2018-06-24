import App from './app';
import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });
describe('App', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('div').text()).toBe('Welcome to React Boilerplate App');
    expect(wrapper).toMatchSnapshot();
  });
});
