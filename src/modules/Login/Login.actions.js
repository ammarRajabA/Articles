import authenticate from '../../fakeAPI/authenticate'
import history from '../../routes/history'

export const loginUser=({email,password})=>dispatch=>{
	dispatch({type:"START_LOGIN"})
	// Use Axios or Fetch to authenticate
	var response=authenticate.post({email,password});
	if (typeof(response)==='object')
		localStorage.setItem("user",JSON.stringify(response));
	dispatch({type:"FINISH_LOGIN"});
	history.push('/articles');
	window.location.reload();
}