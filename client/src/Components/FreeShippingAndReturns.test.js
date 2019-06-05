import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import FreeShippingAndReturns from './FreeShippingAndReturns.jsx';

describe('testing FreeShippingAndReturns component', ()=> {

	//shallow rendering by Enzyme
	it('should return a single-node wrapper.', ()=> {
		expect(shallow(<FreeShippingAndReturns />).length).toEqual(1)
	})

	it('should handle click event', () => {
		const handleFreeShipping = (input) => {
			return input;
		}
		const wrapper = mount(<FreeShippingAndReturns handleFreeShipping={handleFreeShipping}/>)
		
		wrapper.find("#buttonbutton").simulate('click')
		expect(wrapper.props().handleFreeShipping('asd')).toEqual('asd')

		wrapper.find("#fadeIn").simulate('click')
		expect(wrapper.props().handleFreeShipping('abc')).toEqual('abc')
	})

	//snapshot testing by Jest
	// it('should grab a snapshot of the component.', ()=> {
	// 	const component = renderer.create(<App />)
	// 	let tree = component.toJSON();
	// 	expect(tree).toMatchSnapshot();
    // })
   

})