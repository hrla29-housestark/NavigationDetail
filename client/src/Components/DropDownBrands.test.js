import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import DropDownBrands from './DropDownBrands.jsx';

describe('testing DropDownBrands component', ()=> {

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
    it('should handle changeview when mouseEnter or leave', ()=> {
		const changeView = (input) => {
			return input;
		}
        let wrapper = shallow(<DropDownBrands changeView={changeView}/>)
        
		wrapper.find('#mainmain').simulate('mouseEnter')
		expect(wrapper.instance().props.changeView('brands')).toEqual('brands')

		wrapper.find('#mainmain').simulate('mouseLeave')
		expect(wrapper.instance().props.changeView('')).toEqual('')
	})

})