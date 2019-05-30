import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import DropDownSearch from './DropDownSearch.jsx';

describe('testing App component', ()=> {

	//shallow rendering by Enzyme
	it('should return a single-node wrapper.', ()=> {
		expect(shallow(<DropDownSearch />).length).toEqual(1)
	})

	// it('should map through the elements', () => {
	// 	const category = ['shoes','white','men'];
	// 	const wrapper = shallow(<DropDownSearch category={category}/>)
	// 	wrapper.instance().props.category.map(el => <h1 id="h1">el</h1>)
		
	// 	const texts = wrapper.find('#h1').map(node => node.text());
	// 	expect(texts).to.eql(['shoes','white','men']);


	// })

	//snapshot testing by Jest
	// it('should grab a snapshot of the component.', ()=> {
	// 	const component = renderer.create(<App />)
	// 	let tree = component.toJSON();
	// 	expect(tree).toMatchSnapshot();
    // })
   

})