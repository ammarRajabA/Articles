import React from 'react'
import { shallow ,mount } from 'enzyme';

import {NewArticle} from './NewArticle.component';
import fake_articles from '../../fakeAPI/fake_articles';
import fake_accounts from '../../fakeAPI/fake_accounts';

import article from '../../fakeAPI/article'

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
};

global.localStorage = new LocalStorageMock;

const test_props={
	match:{
		params:{
			id:"13245"
		}
	},
	article:{
		...article.get("13245"),
		loading:false
	}
}

describe('Article component',function () {

	it('match snapshot',function () {
		localStorage.setItem("user",JSON.stringify(fake_accounts[0]))
		const component = mount(
			<NewArticle 
				match={test_props.match} 
				article={test_props.article}
				debug
			/>);
		
		expect(component).toMatchSnapshot();
		localStorage.clear()
	})
})