import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import DropDownBrands from './DropDownBrands.jsx';
import App from './App.jsx'

describe('testing App component', ()=> {

	//shallow rendering by Enzyme
	it('should return a single-node wrapper.', ()=> {
		expect(shallow(<DropDownBrands />).length).toEqual(1)
	})

	//snapshot testing by Jest
	// it('should grab a snapshot of the component.', ()=> {
	// 	const component = renderer.create(<App />)
	// 	let tree = component.toJSON();
	// 	expect(tree).toMatchSnapshot();
    // })
    it('should handle changeview', ()=> {
		
        let wrapper = shallow(<DropDownBrands />)
        let wrapperApp = shallow(<App />)
        
		wrapper.find('#mainmain').simulate('mouseEnter')
		expect(wrapperApp.state().view).toEqual('brands')

		wrapper.find('#mainmain').simulate('mouseLeave')
		expect(wrapperApp.state().view).toEqual('')
	})

})