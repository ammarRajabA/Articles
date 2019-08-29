import fakeArticles from '../../fakeAPI/fake_articles'
import history from '../../routes/history'
import articles from '../../fakeAPI/articles'

export const saveArticle=(article)=>dispatch=>{
	dispatch({type:"START_POST_ARTICLE"})
	// Use Axios or Fetch to POST article to backend
	fakeArticles.push(article)
	dispatch({type:"FINISH_POST_ARTICLE"});
	history.push('/articles');
}

export const updateArticle=(id,article)=>dispatch=>{
	dispatch({type:"START_PATCH_ARTICLE"})
	// Use Axios or Fetch to POST article to backend
	articles.patch(id,article)
	dispatch({type:"FINISH_PATCH_ARTICLE"});
	history.push('/articles');
}