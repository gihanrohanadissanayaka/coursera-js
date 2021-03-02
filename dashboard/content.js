import axios from 'axios';
import React from 'react';
import './content.css';
import './default.css';


 

class dashboard extends React.Component{

    state = {};
    /*
    this code part add to start.js for as a parent function and pass all components *************

    componentDidMount() {

        

        axios
            .get('user url' )

            .then(response => {
                this.setState({
                    user: response.data
                })
            },
            error => {
                console.log(error)
            })



    }
    */
    render(){
        

        return(

            <div>
                <div class="row">
                    <div class="col-2">
                        <div className='sidebarback'>
                        <div className='sidebar'>
                            
                            <img className='sidebarlogo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU53EcOIyxE7pOZJBvGHJGbDk39EYxvOhbdw&usqp=CAU'></img>
                            
                            <hr></hr>
                        </div>
                        <div className='sidebaractive'>
                        <nav class="navbar navbar-light bg-light">
                        <a class="navbar-brand" href="/dashboard">Home</a>
                        </nav>
                        </div>

                        <div className='sidebar'>
                        <nav class="navbar navbar-light bg-light">
                        <a class="navbar-brand" href="/dashboard/sentitems">Sent Items</a>
                        </nav>
                        </div>

                        <div className='sidebar'>
                        <nav class="navbar navbar-light bg-light">
                        <a class="navbar-brand" href="#">Inbox</a>
                        </nav>
                        </div>

                        <div className='sidebar'>
                        <nav class="navbar navbar-light bg-light">
                        <a class="navbar-brand" href="#">Final</a>
                        </nav>
                        </div>
                        </div>
                    </div>
                    <div class="col-10">
                            
                    <div>
               <div>
                        <hr></hr>
                    <div className='greeting'>
                                <h2>Hi, {this.props.user} </h2><br></br>
                                <h3>Check your documents...</h3>
                                <img width='50%' height='auto' src='https://cdn.dribbble.com/users/4874/screenshots/1776423/inboxiconanimation_30.gif'></img>

                                

                    </div>

                </div>
            </div>
                        
                    </div>
                </div>
                
            </div>
        );
    
}
}

export default dashboard;