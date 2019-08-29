import articles from './fake_articles'
export default {
	get:(id)=>{
		return articles.find((article)=>article.id===id)
	},
	delete:(id)=>{
		var target=articles.findIndex((article)=>article.id===id);
		articles.splice(target,1)
	}
}