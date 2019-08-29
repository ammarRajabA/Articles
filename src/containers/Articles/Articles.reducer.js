const INIT={
	articles:[],
	loading:false,
}

export default (state=INIT,action)=>{
	switch(action.type){
		case 'START_GET_ARTICLES':
			return {...state,articles:[],loading:true}
		case 'FINISH_GET_ARTICLES':
			return {...state,articles:action.payload,loading:false}
		default:
			return state;
	}
}