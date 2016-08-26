import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Listing from './Listing'
import styles from './styles.module.css'

describe('<Listing />', () => {
	let wrapper;
	const places = [{
		name: 'Chicago'
	}, {
		name: "San Francisco"
	}];
	
	beforeEach(() => {
		wrapper = shallow(<Listing places={places} />)
	});
	
	it('wraps the component in a listing css class')
	it('has an item for each place in the places prop')
})