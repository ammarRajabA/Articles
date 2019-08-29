import history from './history';

export default {
	"Home":()=>history.push('/'),
	"Articles":()=>history.push('/articles'),
	"New Article":()=>history.push('/new-article'),
	"About":()=>history.push('/about')
}