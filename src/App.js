import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Link } from "react-router-dom";

import { Button } from 'reactstrap';

import history from './routes/history.js'

import Home from './containers/Home/Home.component.js'
import Articles from './containers/Articles/Articles.component.js'
import Article from './containers/Article/Article.component.js'
import NewArticle from './containers/NewArticle/NewArticle.component.js'

import Login from './modules/Login/Login.component.js';

import Header from './components/Header/Header.component.js';

import links from './routes/links'

import './App.style.css'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={showLogin:false}
    this.user=JSON.parse(localStorage.getItem('user'))
    if (this.user) history.push('/articles')
  }
  handleLogout=()=>{
    localStorage.clear();
    history.push('/');
    window.location.reload();
  }
  renderHeader=()=>{
    return (
      <Header links={links}>
        {
          this.user?
          <Button onClick={this.handleLogout}>Logout</Button>:
          <div className="login-container">
            {this.state.showLogin?<Login/>:<Button onClick={()=>this.setState({showLogin:true})}>Login</Button>}
          </div>
        }
      </Header>
    )
  }
  renderFooter=()=>{
    return <span className="footer">Made with <span style={{color:'#e25555'}}>&#9829;</span> by Ammar</span>
  }
  renderRoutes=()=>{
    return (
        <Router history={history}>
          <Route path="/" exact component={Home} />
          <Route path="/articles" exact component={Articles} />
          <Route path="/articles/:id" exact component={Article} />
          <Route path="/new-article" exact component={NewArticle} />
          <Route path="/new-article/:id" exact component={NewArticle} />
        </Router>
      )
  }
  render(){
    return (
      <div className="app-container">
        {this.renderHeader()}
        {this.renderRoutes()}
        {this.renderFooter()}
      </div>
    );
  }
}

export default connect(null,{})(App);
