import React from 'react';
import { Link } from 'react-router-dom';

class Show extends React.Component {
    state = {
        article: {}
    }

    componentDidMount () {
        fetch( `/api/blogs/${ this.props.match.params.id }` )
            .then( response => response.json() )
            .then( article => {
                this.setState( () => ( {
                    article
                } ) );
            } );
    }

    render () {
        return (
            <div>
                <Link to={`/${ this.state.article.id }`}>{this.state.article.title}</Link>
                <p>{this.state.article.content}</p>
            </div>
        );
    }
}

export default Show;
