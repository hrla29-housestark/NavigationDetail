import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import DropDownSearchProductEntry from './DropDownSearchProductEntry.jsx';
import { wrap } from 'module';

describe('testing DropDownSearchProductEntry component', ()=> {

	//shallow rendering by Enzyme
	it('should return a single-node wrapper.', ()=> {
		expect(shallow(<DropDownSearchProductEntry />).length).toEqual(1)
	})

	it('should handle props', () => {
		const product = {type: 'Shoes', name: 'Men shoes' };
		const wrapper = mount(<DropDownSearchProductEntry product={product}/>)
		expect(wrapper.props().product.type).toEqual('Shoes')
		expect(wrapper.props().product.name).toEqual('Men shoes')
	})
	//snapshot testing by Jest
	// it('should grab a snapshot of the component.', ()=> {
	// 	const component = renderer.create(<App />)
	// 	let tree = component.toJSON();
	// 	expect(tree).toMatchSnapshot();
    // })
   

})