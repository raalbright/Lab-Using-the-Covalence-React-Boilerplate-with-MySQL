import React from 'react';

class New extends React.Component {
    state = {
        title: '',
        content: ''
    }

    handleSubmit = ( e ) => {
        e.preventDefault();
        const article = this.state;
        fetch( '/api/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( article )
        } )
            .then( res => res.json() )
            .then( ( { id } ) => this.props.history.replace( `/${id}` ) );
    }

    handleTitleChange = ( e ) => {
        this.setState( {
            title: e.target.value
        } )
    }
    handleContentChange = ( e ) => {
        this.setState( {
            content: e.target.value
        } )
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" onChange={this.handleTitleChange} />
                <label htmlFor="content">Content</label>
                <textarea name="content" id="content" cols="30" rows="10" onChange={this.handleContentChange}></textarea>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default New;
