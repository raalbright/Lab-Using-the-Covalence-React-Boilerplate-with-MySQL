import React from 'react';
import { Link } from 'react-router-dom';

class List extends React.Component {

    state = {
        posts: []
    }

    componentDidMount () {
        fetch( '/api/blogs' )
            .then( response => response.json() )
            .then( posts => {
                this.setState( () => ( {
                    posts
                } ) );
            } );
    }

    render () {
        return (
            <div>
                {this.state.posts.map( post => {
                    return (
                        <div key={post.id}>
                            <Link to={`/${ post.id }`}>{post.title}</Link>
                            <p>{post.content}</p>
                        </div>
                    )
                } )}
            </div>
        );
    }
}

export default List;
