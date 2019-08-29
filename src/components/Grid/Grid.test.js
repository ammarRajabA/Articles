import React from 'react'
import { shallow ,mount } from 'enzyme';

import Grid from './Grid.component';
import fake_articles from '../../fakeAPI/fake_articles'

describe('Grid component',function () {
	it('match snapshot',function () {
		const component = mount(<Grid items={fake_articles} cols={3}/>);
		expect(component).toMatchSnapshot();
	})
})