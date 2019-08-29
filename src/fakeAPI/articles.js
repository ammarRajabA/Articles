import articles from './fake_articles'
export default {
	get:()=>{
		return {data:articles}
	},
	patch:(id,article)=>{
		var target=articles.findIndex((article,)=>article.id===id);
		articles[target]={...article}
	}
}