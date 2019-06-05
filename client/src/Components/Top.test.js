import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Top from './Top.jsx'

describe('Testing Top Component', () => {

    it('should render the component', () => {
        expect(shallow(<Top />).length).toEqual(1);
    })

    it('should handle handleSignUp when click', () => {
        let signUp = false;
        const handleSignUp = (input) => {
            return !input
        }
        
        const component = shallow(<Top handleSignUp={handleSignUp} signUp={signUp}/> )
        component.find('#top').simulate('click')
        expect(component.instance().props.handleSignUp(component.instance().props.signUp)).toEqual(true)

    })

  
})