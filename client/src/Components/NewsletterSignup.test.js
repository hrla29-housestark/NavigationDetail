import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import NewsletterSignUp from './NewsletterSignUp.jsx'

describe('Testing NewslettersSignUp Component', () => {

    it('should render the component', () => {
        expect(shallow(<NewsletterSignUp />).length).toEqual(1);
    })

    it('should handle click event ', () => {
        var checked = true;
        const changeCheckBox = () => {
            return !checked;
        }
        const component = shallow(<NewsletterSignUp changeCheckBox={changeCheckBox} check={true}/>)
        component.find('#result').simulate('click')
        expect(component.instance().props.changeCheckBox()).toEqual(false);
       
    })

    it('should able to use props', () => {
        const component = shallow(<NewsletterSignUp  check={true}/>)
        expect(component.instance().props.check).toEqual(true);
    })
})