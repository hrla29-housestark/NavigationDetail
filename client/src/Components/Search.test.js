import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Search from './Search.jsx'

describe('Testing Search component', () => {

    it('should render the component', () => {
        expect(shallow(<Search />).length).toEqual(1);
    })

    it('should check state', () => {
        const component = shallow(<Search />)
        expect(component.state().active).toEqual(false)
        expect(component.state().search).toEqual('')
    })
    
    it('should handle handleClick function', () => {
        const component = shallow(<Search />)
        expect(component.state().active).toEqual(false)
        component.instance().handleClick();
        expect(component.state().active).toEqual(true)
        
    })

    it('should change state when handleChange function is called', () => {
        const handleSearchChange = (input) => {
            return input;
        }
        var event = {target: {value:'ufuk'}}
        const component = shallow(<Search handleSearchChange={handleSearchChange} />)
        expect(component.state().search).toEqual('')
        component.instance().handleChange(event,
            () => component.instance().props.handleSearchChange('ufuk') )
        expect(component.state().search).toEqual('ufuk')
        
    })

    it('should updated the state when handleCross functions is called', () => {
        const component = shallow(<Search />)
        var event = {target: {value:'ufuk'}}
        component.instance().handleChange(event)
        expect(component.state().search.length === 0).toEqual(false)
        
        component.instance().handleCross()
        expect(component.state().search.length === 0).toEqual(true)
    })

    it('it should handleclick event', () => {
        
        const handleClick = () => {
            return 'clicked';
        }
        const component = shallow(<Search handleClick={handleClick}/> )
        
        component.find('#searchIcon').simulate('click')
        expect(component.instance().props.handleClick()).toEqual('clicked');

        component.find('#formSearch').simulate('click')
        expect(component.instance().props.handleClick()).toEqual('clicked');

        var event = {target: {value:'mike'}}
        component.instance().handleChange(event)
        expect(component.state().search).toEqual('mike') 
        
        component.find('#inputCross').simulate('click')
        expect(component.instance().props.handleClick()).toEqual('clicked');
    })

})