import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import ShoppingCart from './ShoppingCart.jsx'

describe('Testing ShoppingCart Component', () => {

    it('should render the component', () => {
        expect(shallow(<ShoppingCart />).length).toEqual(1);
    })

   
})