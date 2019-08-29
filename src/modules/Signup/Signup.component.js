import React,{Component} from 'react';
import { connect } from 'react-redux';

import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import {validateEmail} from '../../helpers/validators'

import {signupUser} from './Signup.actions.js'

import './Signup.style.css'

class Signup extends Component{
	constructor(props){
		super(props);
		this.state={
			firstName:'',
			lastName:'',
			email:'',
			password:'',
			repPassword:''
		}
	}
	handleInvalid=()=>{
		if (this.state.email.length===0) return true;
		return validateEmail(this.state.email)
	}
	handleSubmit=()=>{
		this.props.signupUser(this.state)
	}
	render(){
		return (
				<Form>
					<FormGroup>
						<Label for="firstName">First Name</Label>
						<Input bsSize="sm" id="firstName" value={this.state.firstName} onChange={(e)=>this.setState({firstName:e.target.value})}/>
					</FormGroup>
					<FormGroup>
						<Label for="lastName">Last Name</Label>
						<Input bsSize="sm" id="lastName" value={this.state.lastName} onChange={(e)=>this.setState({lastName:e.target.value})}/>
					</FormGroup>
					<FormGroup>
						<Label for="email">Email</Label>
						<Input bsSize="sm" id="email" type="email" invalid={!this.handleInvalid()} value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/>
					</FormGroup>
					<FormGroup>
						<Label for="password">Password</Label>
						<Input bsSize="sm" id="password" type="password" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})}/>
					</FormGroup>
					<FormGroup>
						<Label for="repPassword">Repeat Password</Label>
						<Input bsSize="sm" id="repPassword" type="password" invalid={this.state.repPassword!==this.state.password}  value={this.state.repPassword} onChange={(e)=>this.setState({repPassword:e.target.value})}/>
					</FormGroup>
					<FormFeedback tooltip>{this.props.alert}</FormFeedback>
					<Button className="signup-submit" size="lg" onClick={this.handleSubmit}>Sign up for Articles</Button>
				</Form>
			)
	}
}

export default connect(null,{signupUser})(Signup);