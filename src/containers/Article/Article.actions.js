import article from '../../fakeAPI/article'
import {getArticles} from '../Articles/Articles.actions'
import history from '../../routes/history'

export const getArticle=(id)=>dispatch=>{
	dispatch({type:"START_GET_ARTICLE"});
	// Define here Axios or Fetch Http requests
	var fakeResponseArticle=article.get(id);
	console.log(fakeResponseArticle)
	dispatch({type:"FINISH_GET_ARTICLE",payload:fakeResponseArticle});
}

export const deleteArticle=(id)=>dispatch=>{
	dispatch({type:"START_DELETE_ARTICLE"});
	// Define here Axios or Fetch Http requests
	var fakeResponseArticle=article.delete(id);
	dispatch({type:"FINISH_DELETE_ARTICLE",payload:fakeResponseArticle});
	getArticles()(dispatch);
	history.push('/articles');
}