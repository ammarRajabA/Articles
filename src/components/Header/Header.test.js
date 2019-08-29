import React from 'react'
import { shallow ,mount } from 'enzyme';

import Header from './Header.component';
import links from '../../routes/links'

describe('Header component',function () {
	it('match snapshot',function () {
		const component = mount(<Header links={links}/>);
		expect(component).toMatchSnapshot();
	})
})