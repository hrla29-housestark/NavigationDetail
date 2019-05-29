import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import DropDownMen from './DropDownMen.jsx';
import App from './App.jsx'

describe('testing App component', ()=> {

	//shallow rendering by Enzyme
	it('should return a single-node wrapper.', ()=> {
		expect(shallow(<DropDownMen />).length).toEqual(1)
	})

	//snapshot testing by Jest
	// it('should grab a snapshot of the component.', ()=> {
	// 	const component = renderer.create(<App />)
	// 	let tree = component.toJSON();
	// 	expect(tree).toMatchSnapshot();
    // })
    it('should handle mouseEnter and mouseLeave', ()=> {
		
        let wrapper = shallow(<DropDownMen />)
        let wrapperApp = shallow(<App />)
        
		wrapper.find('#mainmain').simulate('mouseEnter')
		expect(wrapperApp.state().view).toEqual('men')

		wrapper.find('#mainmain').simulate('mouseLeave')
		expect(wrapperApp.state().view).toEqual('')
	})

})