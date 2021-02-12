import React, {Component} from 'react';
import Header from '../common/header/Header';

class Controller extends Component {
    constructor() {
        super();
        this.state = {
            baseUrl : "http://localhost:8080/api"
        }
    }

    render() {
        return(
            <div>
                <Header baseUrl={this.state.baseUrl}/>
            </div>
        );
    }
}

export default Controller;