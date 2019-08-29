import accounts from './fake_accounts'

export default {
	post:({email,password})=>{
		return accounts.find((account,index)=>account.email===email&&account.password===password)
	}
}