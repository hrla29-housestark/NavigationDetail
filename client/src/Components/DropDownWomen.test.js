import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import DropDownWomen from './DropDownWomen.jsx';

describe('testing DropDownWomen component', ()=> {

	//shallow rendering by Enzyme
	it('should return a single-node wrapper.', ()=> {
		expect(shallow(<DropDownWomen />).length).toEqual(1)
	})

	it('should handle mouseEnter and mouseLeave',() => {
        const changeView = (input) => {
            return input;
        }
        const wrapper = shallow(<DropDownWomen changeView={changeView}/>);

        wrapper.find('#women').simulate('mouseEnter')
        expect(wrapper.instance().props.changeView('men')).toEqual('men')

        wrapper.find('#women').simulate('mouseLeave')
        expect(wrapper.instance().props.changeView('')).toEqual('')

    })

	//snapshot testing by Jest
	// it('should grab a snapshot of the component.', ()=> {
	// 	const component = renderer.create(<App />)
	// 	let tree = component.toJSON();
	// 	expect(tree).toMatchSnapshot();
    // })
   

})