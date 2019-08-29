import React from 'react'
import { shallow ,mount } from 'enzyme';

import Spinner from './Spinner.component';

describe('Spinner component',function () {
	it('match snapshot',function () {
		const component = mount(<Spinner />);
		expect(component).toMatchSnapshot();
	})
})