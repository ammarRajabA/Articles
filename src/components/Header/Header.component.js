import React,{Component} from 'react';

import Menu from '../Menu/Menu.component.js';

import './Header.style.css'

class Header extends Component{
	state={showMenu:false}
	renderMenu=()=>{
		return(
			<div className="menu-container">
	          <span className="menu-button" onClick={()=>this.setState({showMenu:true})}>
	            <i className="fas fa-bars"></i>
	          </span>
	          <Menu show={this.state.showMenu} links={this.props.links} onDismiss={()=>this.setState({showMenu:false})}/>
	        </div>
			)
	}
	render(){
		return (
				<div className="header-container">
					<span className="header-logo-container">
						<img className="logo" src="/logo.png"/>
						<span className="label">Articles</span>
					</span>
					{
						Object.keys(this.props.links).map((link,index)=>
								<span key={index.toString()} className="header-item" onClick={this.props.links[link]}>{link}</span>
							)
					}
					<div className="header-childs">
						{this.renderMenu()}
						{this.props.children}
					</div>
				</div>
			)
	}
}

export default Header;