import React from 'react'
import { shallow ,mount } from 'enzyme';

import {Article} from './Article.component';
import fake_articles from '../../fakeAPI/fake_articles';

import article from '../../fakeAPI/article'

const test_props={
	match:{
		params:{
			id:"13245"
		}
	},
	article:{
		id:"",
		title:"",
		content:"",
		author:"",
		image:"",
		loading:false,
	}
}

describe('Article component',function () {

	it('match snapshot',function () {
		const component = mount(
			<Article 
				match={test_props.match} 
				article={test_props.article} 
				getArticle={()=>test_props.article=article.get(test_props.match.params.id)}
			/>);
		
		const spy = jest.spyOn(Article.prototype, "componentDidUpdate");		
		expect(spy).toHaveBeenCalledTimes(0);

		component.setProps({...test_props});

		expect(spy).toHaveBeenCalledTimes(1);
		
		expect(component).toMatchSnapshot();
	})
})