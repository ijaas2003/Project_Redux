import { Component } from "react";

class ErrorBoundry extends Component {
    constructor (props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateError (error) {
        return {
            hasError: true
        }
    }
    render () {
        if (this.state.hasError == true) {
            return <h1>Somthing went Wrong</h1>
        }
        return this.props.children
    }
}
export default ErrorBoundry;
