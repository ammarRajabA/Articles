import React,{Component} from 'react';
import { connect } from 'react-redux';

import history from '../../routes/history.js'

import Signup from '../../modules/Signup/Signup.component.js';

import './Home.style.css'

class Home extends Component{
	constructor(props){
		super(props);
		this.user=JSON.parse(localStorage.getItem('user'))
    	if (this.user) history.push('/articles')
	}
	renderHeroText=()=>{
		return (
			<div className="home-hero-text">
				<h1 className="title">Write your article</h1>
				<div className="details">
					<b>Articles</b> is your place to express yourself, write your article now and share your ideas.
				</div>
			</div>
		)
	}
	renderForm=()=>{
		return (
			<div className="form-container">
				<Signup/>
			</div>
		)
	}
	render(){
		return (
			<div className="home-container">
				{this.renderHeroText()}
				{this.renderForm()}
			</div>
			)
	}
}

export default connect(null,{})(Home);