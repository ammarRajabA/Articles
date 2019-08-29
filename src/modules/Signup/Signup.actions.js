import authenticate from '../../fakeAPI/authenticate'
import history from '../../routes/history'
import fake_accounts from '../../fakeAPI/fake_accounts'

export const signupUser=(newUser)=>dispatch=>{
	dispatch({type:"START_SIGNUP"})
	// Use Axios or Fetch to authenticate and Sign up
	fake_accounts.push(newUser);
	var response=authenticate.post({email:newUser.email,password:newUser.password});
	localStorage.setItem("user",JSON.stringify(response));
	dispatch({type:"FINISH_SIGNUP"});
	history.push('/articles');
	window.location.reload();
}