import React, {Component} from 'react';
import MainTitle from '../components/MainTitle';

export default class Home extends Component {
    render(){
        return(
            <div>
                <MainTitle text="Ma homepage"/>
                <p>
                    C'est ma page Home! 
                </p>
            </div>
        );
    }
}