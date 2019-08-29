import React,{Component} from 'react';
import { connect } from 'react-redux';

import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import {validateEmail} from '../../helpers/validators'

import {loginUser} from './Login.actions.js'

class Login extends Component{
	constructor(props){
		super(props);
		this.state={
			email:'',
			password:''
		}
	}
	handleSubmit=()=>{
		if (!(this.state.email.length===0 || this.state.password.length===0))
			this.props.loginUser(this.state)
	}
	render(){
		return (
				<Form inline>
					<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
						<Input placeholder="Email" id="email" type="email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/>
					</FormGroup>
					<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
						<Input placeholder="Password" id="password" type="password" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})}/>
					</FormGroup>
					<FormFeedback tooltip>{this.props.alert}</FormFeedback>
					<Button onClick={this.handleSubmit}>Login</Button>
				</Form>
			)
	}
}

export default connect(null,{loginUser})(Login);