import articles from '../../fakeAPI/articles'

export const getArticles=()=>dispatch=>{
	dispatch({type:"START_GET_ARTICLES"});
	// Define here Axios or Fetch Http requests
	var fakeArticlesResponse=articles.get();
	dispatch({type:"FINISH_GET_ARTICLES",payload:fakeArticlesResponse.data});
}