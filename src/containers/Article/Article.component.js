import React, {Component} from 'react';
import { connect } from 'react-redux';

import Spinner from '../../components/Spinner/Spinner.component.js';

import history from '../../routes/history';

import {getArticle,deleteArticle} from './Article.actions.js' 

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import {stateToHTML} from 'draft-js-export-html';
import {convertFromRaw} from 'draft-js';

import './Article.style.css';

export class Article extends Component{
	state={showDialog:false}
	componentDidMount(){
		if (this.props.match.params.id){
			this.props.getArticle(this.props.match.params.id)
		}
	}
	componentDidUpdate(prevProps){
		if (this.props.match.params.id !== prevProps.match.params.id){
			this.props.getArticle(this.props.match.params.id)
		}
	}
	renderArticle=()=>{
		if (this.props.article.loading) return <Spinner/>
		if (this.props.article.content.length===0) return <Spinner/>
		else{
			var contentState=convertFromRaw(JSON.parse(this.props.article.content))
			return(
					<div className="article">
						<img className="cover" src={this.props.article.image}/>
						<span className="title">{this.props.article.title}</span>
						<span className="author">by {this.props.article.author}</span>
						<div className="content" dangerouslySetInnerHTML={{__html: stateToHTML(contentState)}} />
					</div>
				)
		}
	}
	renderIcons=()=>{
		return (
			<span className="icons-container">
				<span onClick={()=>history.push(`/new-article/${this.props.article.id}`)} className="edit-button">
					<i className="fas fa-edit"></i>
				</span>
				<span onClick={()=>this.setState({showDialog:true})} className="delete-button">
					<i className="fas fa-trash"></i>
				</span>
			</span>
			)
	}
	renderDialog=()=>{
		return (
				<div>
		        		<Modal isOpen={this.state.showDialog} toggle={()=>this.setState({showDialog:false})} className={this.props.className}>
		          		<ModalHeader>Delete Article</ModalHeader>
		          		<ModalBody>
		            		You are about to delete article, are you sure ?
				        </ModalBody>
		          		<ModalFooter>
		            		<Button color="danger" onClick={()=>this.setState({showDialog:false},()=>this.props.deleteArticle(this.props.article.id))}>Yes</Button>{' '}
		            		<Button color="secondary" onClick={()=>this.setState({showDialog:false})}>Cancel</Button>
		          		</ModalFooter>
		        	</Modal>
		      	</div>
			)
	}
	render(){
		return (
				<div className="article-container">
					{this.renderIcons()}
					{this.renderArticle()}
					{this.state.showDialog&&this.renderDialog()}
				</div>
			)
	}
}

const mapStateToProps=(state)=>{
	return {article:state.article}
}

export default connect(mapStateToProps,{getArticle,deleteArticle})(Article);