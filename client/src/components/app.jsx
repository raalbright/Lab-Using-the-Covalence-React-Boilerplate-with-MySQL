import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Blog from './blog';

class Navigation extends Component {

    render () {
        return (
            <Router>
                <Fragment>
                    <Link to="/">Home</Link>
                    <Link to="/new">New Post</Link>
                    <Switch>
                        <Route exact path="/" component={Blog.List} />
                        <Route path="/new" component={Blog.New} />
                        <Route path="/:id" component={Blog.Show} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;
