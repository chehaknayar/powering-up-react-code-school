class StoryBox extends React.Component {
    render() {
        const now = new Date();
        const topicsList = ['HTML', 'JavaScript', 'React'];

        return(
            <div>
                <h3>Stories App</h3>
                <p className="text-success">
                    Current time: {now.toTimeString()}
                </p>
                <ul>
                    {topicsList.map(topic => <li>{topic}</li>)}
                </ul>
            </div>  
        );
    }
}

ReactDOM.render(
<StoryBox />, document.getElementById('story-app')
);

class Comment extends React.Component {
    render() {
        return(
            <div className="panel">
                <p className="panel-heading text-success">{this.props.author}</p>
                <hr/>
                <p className="panel-body">{this.props.body}</p>
                <div className="panel-footer">
                    <a href="#" className="text-danger text-right">
                        Delete comment
                        Animation: magic move from here
                    </a>
                </div>
            </div>
        );
    }
}

class CommentBox extends React.Component {
    render() {
        const comments = this._getComments();
        return(
            <div className="jumbotron">
                <h3 className="text-uppercase text-info">Comments</h3>
                <hr/>

                <h4 className="text-uppercase text-muted">{this._getCommentsTitle(comments.length)}</h4>
                <br/>
                <br/>

                <div>
                    {comments}
                </div>
            </div>
        );
    }

    _getComments() {
        const commentList = [
            {id: 1, author: 'Morgan McCircuit', body: 'Great picture!'},
            {id: 2, author: 'Bending Bender', body: 'Excellent stuff'}
        ];
        return commentList.map(comment => {
            return (<Comment author={comment.author} body={comment.body} key={comment.id} />);
        });
    }

    _getCommentsTitle(commentCount) {
        if(commentCount === 0) {
            return 'No comments yet';
        } else if(commentCount === 1) {
            return '1 comment';
        } else {
            return `${commentCount} comments`;
        }
    }
}

ReactDOM.render(
    <CommentBox />, document.getElementById('comment')
);