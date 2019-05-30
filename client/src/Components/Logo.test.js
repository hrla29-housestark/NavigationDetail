import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import Logo from './Logo.jsx';
import { wrap } from 'module';

describe('testing Logo component', ()=> {

	//shallow rendering by Enzyme
	it('should return a single-node wrapper.', ()=> {
		expect(shallow(<Logo />).length).toEqual(1)
	})
	it('should render text', ()=> {
		let wrapper = mount(<Logo />)
		expect(wrapper.find('#logoText').text()).toEqual('adidas')
	})
	it('should check props',() => {
		var result = true;
		let wrapper = mount(<Logo signUp={result}/>)
		expect(wrapper.props().signUp).toEqual(true)
	})

	//snapshot testing by Jest
	// it('should grab a snapshot of the component.', ()=> {
	// 	const component = renderer.create(<App />)
	// 	let tree = component.toJSON();
	// 	expect(tree).toMatchSnapshot();
	// })

})