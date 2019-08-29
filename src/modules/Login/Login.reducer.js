const INIT={
	loading:false
}

export default (state=INIT,action)=>{
	switch(action.type){
		case 'START_LOGIN':
			return {...state,loading:true}
		case 'FINISH_LOGIN':
			return {...state,loading:false}
		default:
			return state
	}
}