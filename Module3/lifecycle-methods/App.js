class App extends React.Component {

    constructor(){
        super()
       console.log('Hello from Contructor')
       this.state = {
           todos: []
       }
    }

    componentDidMount(){
        console.log('Hello from Component did mount')

        fetch('https://api.giphy.com/v1/gifs/trending?api_key=OSsE1u9CyQcBk5DvCIWDvOFrrsnvRv1V&limit=25&rating=g')
        .then(response => response.json()) // parse the request
        .then(json => console.log(json));
        // .then(json => this.setState({todos: json})) // get the data
    }

    componentDidUpdate(){
        console.log('Hello from component did update')
    }

    render() {
        console.log('Hello from Render')
        return(
            <div>
                <h1>Lifecycle Methods</h1>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))