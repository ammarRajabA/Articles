import React from 'react'
import { shallow ,mount } from 'enzyme';

import Menu from './Menu.component';
import links from '../../routes/links'

describe('Menu component',function () {
	it('match snapshot',function () {
		const component = mount(<Menu links={links} show={true}/>);
		expect(component).toMatchSnapshot();
	})
})