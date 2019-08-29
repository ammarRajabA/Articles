import React from 'react'
import { shallow ,mount } from 'enzyme';

import {Articles} from './Articles.component';
import fake_articles from '../../fakeAPI/fake_articles';

import articles from '../../fakeAPI/articles'

const test_props={
	match:{
		params:{
			id:"13245"
		}
	},
	articles:{
		articles:[],
		loading:false
	}
}

describe('Articles component',function () {

	it('match snapshot',function () {
		const component = mount(
			<Articles 
				articles={test_props.articles} 
				getArticles={()=>test_props.articles.articles=articles.get()}
			/>);
		
		const spy = jest.spyOn(Articles.prototype, "render");		
		expect(spy).toHaveBeenCalledTimes(0);

		component.setProps({...test_props});

		expect(spy).toHaveBeenCalledTimes(1);
		
		expect(component).toMatchSnapshot();
	})
})