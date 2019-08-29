import React, {Component} from 'react';
import { Button, CardImg, CardTitle, CardText,CardSubtitle, CardBody } from 'reactstrap';

import {stateToHTML} from 'draft-js-export-html';
import {convertFromRaw} from 'draft-js';

import './Grid.style.css';

class Grid extends Component{
	renderRowItems=(rowIndex)=>{
		var items=[]
		for (var i = 0; i < this.props.cols; i++) {
			let item=this.props.items[(rowIndex*this.props.cols)+i];
			if (item===undefined) return items;
			let contentState=convertFromRaw(JSON.parse(item.content))
			items.push(
					<span className="grid-card" key={i.toString()}>
		        		<CardImg top width="50%" height="50%" src={item.image} alt="Card image cap" />
		        		<CardBody>
		          			<div className="title">{item.title}</div>
		          			<div className="subtitle">{item.author}</div>
		          			<div className="content">
		          				<div dangerouslySetInnerHTML={{__html: stateToHTML(contentState).substr(0,100)+"..."}} />
		          			</div>
		          			<Button onClick={()=>this.props.handleSelect(item)}>Read more</Button>
		        		</CardBody>
		      		</span>
				)
		}
		return items;
	}
	renderRows=()=>{
		var rowsCount=Math.ceil(this.props.items.length/this.props.cols);
		var rows=[];
		for (var i = 0; i < rowsCount; i++) {
			rows.push(
					<span className="grid-card-deck" key={i.toString()}>
						{this.renderRowItems(i)}
					</span>
				)
		}
		return rows;
	}
	render(){
		return(
				<div className="grid-container">
					{this.renderRows()}
				</div>
			)
	}
}

export default Grid;