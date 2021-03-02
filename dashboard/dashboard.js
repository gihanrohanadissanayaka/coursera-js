import React from 'react';
import './dashboard.css';
import Head from './head';
import Content from './content';


export default class dashboard extends React.Component{
    
    state = {
        user: this.props.user
    }
    
    render(){
        return(
            <div>
                

                    <Head user = {this.state.user} />
                    
                    <Content user = {this.state.user} />

                   
            </div>

           
            
        );
    }
}