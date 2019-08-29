import React, {Component} from 'react';
import { connect } from 'react-redux';

import Spinner from '../../components/Spinner/Spinner.component.js';
import Grid from '../../components/Grid/Grid.component.js';

import {getArticles} from './Articles.actions.js' ;

import history from '../../routes/history'

import './Articles.style.css';

export class Articles extends Component{
	state={}
	componentDidMount(){
		this.props.getArticles()
	}
	renderArticles=()=>{
		if (this.props.articles.loading) return <Spinner/>
		else if (this.props.articles.articles.length===0) return (
			<div className="empty-list">
				<img className="image-placeholder" src="/logo.png"/>
				<span className="empty-label">No articles</span>
			</div>
		)
		else return <Grid items={this.props.articles.articles} cols={3} handleSelect={(item)=>history.push(`/articles/${item.id}`)}/>
	}
	render(){
		return(
			<div className="articles-container">
				{this.renderArticles()}
			</div>
			)
	}
}

const mapStateToProps=(state)=>{
	return {articles:state.articles}
}

export default connect(mapStateToProps,{getArticles})(Articles);