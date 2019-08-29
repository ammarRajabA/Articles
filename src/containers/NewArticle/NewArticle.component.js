import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import {Redirect} from 'react-router-dom'

import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, convertFromRaw} from 'draft-js';

import {saveArticle,updateArticle} from './NewArticle.action';

import {genID} from '../../helpers/random';
import history from '../../routes/history'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './NewArticle.style.css';

export class NewArticle extends Component{
	constructor(props){
		super(props);
		var newEditorState= EditorState.createEmpty();
		this.user=JSON.parse(localStorage.getItem('user'));
		if (this.user)
			this.state={
				showMessage:false,
				message:"",
				title:"",
				editorState: newEditorState,
				author:this.user.firstName+' '+this.user.lastName,
				image:'',
				id:genID(),
				newArticle:true
			}
	}
	componentDidMount(){
		if (this.props.match.params.id){
			if (this.user){
				var newEditorState=EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.article.content)))
				this.setState({
					title:this.props.article.title,
					editorState:newEditorState,
					author:this.user.firstName+' '+this.user.lastName,
					image:this.props.article.image,
					id:this.props.article.id,
					newArticle:false
				})
			}
		}
	}
	componentDidUpdate(prevProps){
		if (this.props.match.params.id !== prevProps.match.params.id){
			if (this.user){
				var newEditorState=EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.article.content)))
				this.setState({
					title:this.props.article.title,
					editorState:newEditorState,
					author:this.user.firstName+' '+this.user.lastName,
					image:this.props.article.image,
					id:this.props.article.id,
					newArticle:false
				})
			}
		}
	}
	handleUpload=(e)=>{
		var file=e.target.files[0];
		if (file.size>(4*1024*1024)){
			this.setState({showMessage:true,message:"Maximum file size is 4 MB, this file is "+((e.target.files[0].size/1024)/1024).toFixed(2)+" MB"},()=>{
				setTimeout(()=>this.setState({showMessage:false,message:""}),5000)
			})
		}else{
			var reader  = new FileReader();
			reader.addEventListener("load", ()=> {
				this.setState({image:reader.result})
			}, false);
			reader.readAsDataURL(file);
		}
	}
	renderCoverImage=()=>{
		return (
				<span className="cover-image-container">
					<img src={this.state.image} className="cover-image"/>
					<label htmlFor={"image"} className="label">Click here to upload image</label>
					<Input type="file" accept="image/png, image/jpeg" id={"image"} onChange={this.handleUpload}/>
					{this.state.showMessage&&<label className="error">{this.state.message}</label>}
				</span>
			)
	}
	renderForm=()=>{
		return(
				<div className="form-container">
					<Form>
						<FormGroup>
							<Input placeholder="Title" value={this.state.title} onChange={(e)=>this.setState({title:e.target.value})}/>
						</FormGroup>
					</Form>
					<Button size="lg" onClick={this.handleSubmit}>Submit Article</Button>
				</div>
			)
	}
	renderEditor=()=>{
		// debug for Testing since testing Editor causes test to freeze
		if (this.props.debug) return <div></div>
		return(
				<div  className="editor-container">
					<Editor
						wrapperClassName="editor-wrapper"
						editorState={this.state.editorState}
						onEditorStateChange={(editorState)=>this.setState({editorState})}
					/>
				</div>
			)
	}
	handleSubmit=()=>{
		var editorState=JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()))
		if (this.state.newArticle)
			this.props.saveArticle({
				title:this.state.title,
				content:editorState,
				author:this.state.author,
				image:this.state.image,
				id:this.state.id
			})
		else
			this.props.updateArticle(this.state.id,{
				title:this.state.title,
				content:editorState,
				author:this.state.author,
				image:this.state.image,
				id:this.state.id
			})
	}
	render(){
		if (!this.user) return <Redirect to="/"/>
		return (
			<div className="new-article-container">
				{this.renderCoverImage()}
				{this.renderForm()}
				{this.renderEditor()}
			</div>
		)
	}
}

const mapStateToProps=(state)=>{
	return {article:state.article}
}

export default connect(mapStateToProps,{saveArticle,updateArticle})(NewArticle);