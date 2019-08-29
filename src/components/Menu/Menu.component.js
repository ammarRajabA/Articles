import React, { Component } from 'react';

import './Menu.style.css'

export default class Menu extends Component{
	constructor(props){
		super(props);
		this.setWrapperRef = this.setWrapperRef.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
	}
	componentDidMount(){
		document.addEventListener('mousedown', this.handleClickOutside);
	}
	componentWillUnmount(){
		document.removeEventListener('mousedown', this.handleClickOutside);
	}
	setWrapperRef(node) {
		this.wrapperRef = node;
	}
	handleClickOutside(event) {
		if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
			this.props.onDismiss()
		}
	}
	render(){
		if (!this.props.show) return <span></span>
		return(
			<div className="menu-popup-container" ref={this.setWrapperRef}>
				{
					Object.keys(this.props.links).map((link,index)=>
							<span key={index.toString()} className="menu-option" onClick={this.props.links[link]}>{link}</span>
						)
				}
			</div>
			)
	}
}