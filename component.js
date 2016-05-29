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
        return(
            <div className="jumbotron">
                <h3 className="text-uppercase text-info">Comments</h3>
                <hr/>

                <h4 className="text-uppercase text-muted">2 comments</h4>
                <br/>
                <br/>

                <div>
                    <Comment
                        author="Morgan McCircuit"
                        body="Great picture!" />
                    <Comment
                        author="Bending Bender"
                        body="Excellent stuff" />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <CommentBox />, document.getElementById('comment')
);