import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import DropDownSearchSuggestionEntry from './DropDownSearchSuggestionEntry.jsx';

describe('testing DropDownSearchSuggestionEntry component', ()=> {

	//shallow rendering by Enzyme
	it('should return a single-node wrapper.', ()=> {
		expect(shallow(<DropDownSearchSuggestionEntry />).length).toEqual(1)
	})

	it('should have the props',() => {
        const q = [];
        const wrapper = mount(<DropDownSearchSuggestionEntry q={q} />);

        expect(wrapper.props.q.length).toEqual(0)

    

    })

	//snapshot testing by Jest
	// it('should grab a snapshot of the component.', ()=> {
	// 	const component = renderer.create(<App />)
	// 	let tree = component.toJSON();
	// 	expect(tree).toMatchSnapshot();
    // })
   

})