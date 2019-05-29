import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import App from './App.jsx';

describe('testing App component', ()=> {

	//shallow rendering by Enzyme
	it('should return a single-node wrapper.', ()=> {
		expect(shallow(<App />).length).toEqual(1)
	})

	//snapshot testing by Jest
	// it('should grab a snapshot of the component.', ()=> {
	// 	const component = renderer.create(<App />)
	// 	let tree = component.toJSON();
	// 	expect(tree).toMatchSnapshot();
    // })
    it('should handle signup', ()=> {
		
		let wrapper = shallow(<App />)
		expect(wrapper.state().view).toEqual("");
		expect(wrapper.state().signUp).toEqual(false);
		expect(wrapper.state().q).toEqual('');
		expect(wrapper.state().shipping).toEqual(false);
		expect(wrapper.state().check).toEqual(true);

        
		wrapper.find('#signup').simulate('click')
		expect(wrapper.state().signUp).toEqual(false)

		wrapper.find('#signup').simulate('click')
		expect(wrapper.state().signUp).toEqual(false)
	})

	it('should render componentDidMount()', ()=> {
		let wrapper = shallow(<App />)
		expect.assertions(1)
		let instance = wrapper.instance()
		jest.spyOn(instance, 'fetchProducts')
		instance.componentDidMount()
		expect(instance.fetchProducts).toHaveBeenCalledTimes(1)
	})

	it('should render state', ()=> {
		let wrapper = shallow(<App />)
		// expect.assertions(3)
		expect(wrapper.state().check).toEqual(true)
		wrapper.instance().changeCheckBox()
		expect(wrapper.state().check).toEqual(false)
	})


	it('should render state', ()=> {
		let wrapper = shallow(<App />)
		// expect.assertions(3)
		expect(wrapper.state().view).toEqual("")
		wrapper.instance().changeView('men')
		expect(wrapper.state().view).toEqual('men')
	})

	it('should render state', () => {
		let wrapper = shallow(<App />)

		expect(wrapper.state().signUp).toEqual(false)
		wrapper.instance().handleSignUp()
		expect(wrapper.state().signUp).toEqual(true)
	})

	it('should render state', () => {
		let wrapper = shallow(<App />)

		expect(wrapper.state().q).toEqual('')
		wrapper.instance().handleSearchChange('a')
		expect(wrapper.state().q).toEqual('a')
		wrapper.instance().handleSearchChange('ab')
		expect(wrapper.state().q).toEqual('ab')
	})

	it('should render state', () => {
		let wrapper = shallow(<App />)

		expect(wrapper.state().shipping).toEqual(false)
		wrapper.instance().handleFreeShipping()
		expect(wrapper.state().shipping).toEqual(true)
		expect(wrapper.state().q).toEqual('')
		
	})

})