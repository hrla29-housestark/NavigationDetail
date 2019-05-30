import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import DropDownSports from './DropDownSports.jsx';

describe('testing DropDownSports component', ()=> {

	//shallow rendering by Enzyme
	it('should return a single-node wrapper.', ()=> {
		expect(shallow(<DropDownSports />).length).toEqual(1)
	})

	it('should handle mouseEnter and mouseLeave',() => {
        const changeView = (input) => {
            return input;
        }
        const wrapper = shallow(<DropDownSports changeView={changeView}/>);

        wrapper.find('#sports').simulate('mouseEnter')
        expect(wrapper.instance().props.changeView('sports')).toEqual('sports')

        wrapper.find('#sports').simulate('mouseLeave')
        expect(wrapper.instance().props.changeView('')).toEqual('')

    })

	//snapshot testing by Jest
	// it('should grab a snapshot of the component.', ()=> {
	// 	const component = renderer.create(<App />)
	// 	let tree = component.toJSON();
	// 	expect(tree).toMatchSnapshot();
    // })
   

})