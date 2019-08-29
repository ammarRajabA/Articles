const INIT={
	id:"",
	title:"",
	content:"",
	author:"",
	image:"",
	loading:false,
}

export default (state=INIT,action)=>{
	switch(action.type){
		case 'START_GET_ARTICLE':
			return {...state,loading:true}
		case 'FINISH_GET_ARTICLE':
			return {...state,...action.payload,loading:false}
		case 'START_DELETE_ARTICLE':
			return {...state,loading:true}
		case 'FINISH_DELETE_ARTICLE':
			return {...state,loading:false}
		default:
			return state;
	}
}