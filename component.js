class StoryBox extends React.Component {
    render() {
        const now = new Date();

        return(
            <div>
                <h3>Stories App</h3>
                <p className="text-success">
                    Current time: {now.toTimeString()}
                </p>
            </div>
        );
    }
}

ReactDOM.render(
<StoryBox />, document.getElementById('story-app')
);