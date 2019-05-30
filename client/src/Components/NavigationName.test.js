import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import NavigationName from './NavigationName.jsx';
import { wrap } from 'module';

describe('testing NavigationName component', ()=> {

	//shallow rendering by Enzyme
	it('should return a single-node wrapper.', ()=> {
		expect(shallow(<NavigationName />).length).toEqual(1)
	})

	//snapshot testing by Jest
	// it('should grab a snapshot of the component.', ()=> {
	// 	const component = renderer.create(<App />)
	// 	let tree = component.toJSON();
	// 	expect(tree).toMatchSnapshot();
    // })
    it('should handle mouseEnter and mouseLeave',() => {
        const changeView = (input) => {
            return input;
        }
        const wrapper = shallow(<NavigationName changeView={changeView}/>);

        wrapper.find('#menName').simulate('mouseEnter')
        expect(wrapper.instance().props.changeView('men')).toEqual('men')

        wrapper.find('#menName').simulate('mouseLeave')
        expect(wrapper.instance().props.changeView('')).toEqual('')

        wrapper.find('#womenName').simulate('mouseOver')
        expect(wrapper.instance().props.changeView('women')).toEqual('women')

         wrapper.find('#womenName').simulate('mouseLeave')
        expect(wrapper.instance().props.changeView('')).toEqual('')

        wrapper.find('#kidsName').simulate('mouseOver')
        expect(wrapper.instance().props.changeView('women')).toEqual('women')

         wrapper.find('#kidsName').simulate('mouseLeave')
        expect(wrapper.instance().props.changeView('')).toEqual('')

        wrapper.find('#sportsName').simulate('mouseOver')
        expect(wrapper.instance().props.changeView('women')).toEqual('women')

         wrapper.find('#sportsName').simulate('mouseLeave')
        expect(wrapper.instance().props.changeView('')).toEqual('')

        wrapper.find('#brandsName').simulate('mouseOver')
        expect(wrapper.instance().props.changeView('women')).toEqual('women')

         wrapper.find('#brandsName').simulate('mouseLeave')
        expect(wrapper.instance().props.changeView('')).toEqual('')


    })

   

})