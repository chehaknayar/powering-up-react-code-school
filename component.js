class Comment extends React.Component {
    render() {
        return(
            <div className="panel">
                <p className="panel-heading text-success">{this.props.author}</p>
                <hr/>
                <p className="panel-body">{this.props.body}</p>
                <div className="panel-footer clearfix">
                    <a href="#" className="text-danger pull-right">
                        Delete comment
                    </a>
                </div>
            </div>
        );
    }
}

class CommentBox extends React.Component {
    constructor() {
        super();

        this.state = {
            showComments: false
        }
    }

    render() {
        const comments = this._getComments();
        let commentNodes;
        let buttonText = 'Show comments';

        if(this.state.showComments) {
            buttonText = 'Hide comments';
            commentNodes = <div>{comments}</div>;
        }
        return(
            <div className="jumbotron">
                <h3 className="text-uppercase text-info">Comments</h3>
                <hr/>
                <h4 className="text-uppercase text-muted">{this._getCommentsTitle(comments.length)}</h4>
                <button className="btn btn-primary pull-right" onClick={this._handleClick.bind(this)}>{buttonText}</button>
                <br/>
                <br/>
                {commentNodes}
            </div>
        );
    }

    _handleClick() {
        this.setState({showComments: !this.state.showComments});
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
    <CommentBox />, document.getElementById('story-app')
);