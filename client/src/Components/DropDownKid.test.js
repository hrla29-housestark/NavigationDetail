import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import DropDownKid from './DropDownKid.jsx';
import App from './App.jsx'

describe('testing App component', ()=> {

	//shallow rendering by Enzyme
	it('should return a single-node wrapper.', ()=> {
		expect(shallow(<DropDownKid />).length).toEqual(1)
	})

	//snapshot testing by Jest
	// it('should grab a snapshot of the component.', ()=> {
	// 	const component = renderer.create(<App />)
	// 	let tree = component.toJSON();
	// 	expect(tree).toMatchSnapshot();
    // })
    it('should handle mouseEnter and mouseLeave', ()=> {
		const changeView = (input) => {
			return input;
		}
        let wrapper = shallow(<DropDownKid changeView={changeView}/>)
        
		wrapper.find('#mainmain').simulate('mouseEnter')
		expect(wrapper.instance().props.changeView('kids')).toEqual('kids')

		wrapper.find('#mainmain').simulate('mouseLeave')
		expect(wrapper.instance().props.changeView('')).toEqual('')

		
	})

})