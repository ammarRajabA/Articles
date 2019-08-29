import { combineReducers } from 'redux';

import articles from '../containers/Articles/Articles.reducer.js'
import article from '../containers/Article/Article.reducer.js'
import newArticle from '../containers/NewArticle/NewArticle.reducer'
import login from '../modules/Login/Login.reducer'
import signup from '../modules/Signup/Signup.reducer'

export default combineReducers({
	articles,
	article,
	newArticle,
	login,
	signup
});