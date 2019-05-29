import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Logo from './Logo.jsx';

describe('testing Logo component', ()=> {

	//shallow rendering by Enzyme
	it('should return a single-node wrapper.', ()=> {
		expect(shallow(<Logo />).length).toEqual(1)
	})
	it('should render text', ()=> {
		let wrapper = shallow(<Logo />)
		expect(wrapper.find('#logoText').text()).toEqual('adidas')
	})

	//snapshot testing by Jest
	// it('should grab a snapshot of the component.', ()=> {
	// 	const component = renderer.create(<App />)
	// 	let tree = component.toJSON();
	// 	expect(tree).toMatchSnapshot();
	// })

})