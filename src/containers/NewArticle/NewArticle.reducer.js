const INIT={
	loading:false
}

export default (state=INIT,action)=>{
	switch(action.type){
		case 'START_POST_ARTICLES':
			return {...state,loading:true}
		case 'FINISH_POST_ARTICLES':
			return {...state,loading:false}
		case 'START_PATCH_ARTICLES':
			return {...state,loading:true}
		case 'FINISH_PATCH_ARTICLES':
			return {...state,loading:false}
		default:
			return state;
	}
}