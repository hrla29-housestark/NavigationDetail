import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Bottom from './Bottom.jsx';
import App from './App.jsx'

describe('testing App component', ()=> {

	//shallow rendering by Enzyme
	it('should return a single-node wrapper.', ()=> {
		expect(shallow(<Bottom />).length).toEqual(1)
	})

	//snapshot testing by Jest
	// it('should grab a snapshot of the component.', ()=> {
	// 	const component = renderer.create(<App />)
	// 	let tree = component.toJSON();
	// 	expect(tree).toMatchSnapshot();
	// })
	it('should change shipping onClick', () => {
		const handleFreeShipping = () => {
			return 'Clicked'
		}
		let wrapper = shallow(<Bottom handleFreeShipping={handleFreeShipping}/>)

		wrapper.find('#itemName').simulate('click')
		expect(wrapper.instance().props.handleFreeShipping()).toEqual('Clicked')

	})

})