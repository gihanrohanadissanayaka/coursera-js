import React from 'react';
import './content.css';
import SentItems from './sentItems.js';



class dashboard extends React.Component{
    

    render(){
        

        return(

            <div>
                <div class="row">
                    <div class="col-sm-2">
                        <div className='sidebarback'>
                        <div className='sidebar'>
                            
                            <img className='sidebarlogo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU53EcOIyxE7pOZJBvGHJGbDk39EYxvOhbdw&usqp=CAU'></img>
                            
                            <hr></hr>
                        </div>
                        <div className='sidebar'>
                        <nav class="navbar navbar-light bg-light">
                        <a class="navbar-brand" href="/dashboard">Home</a>
                        </nav>
                        </div>

                        <div className='sidebaractive'>
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
                    <div class="col-sm-10">
                            
                            
                        <SentItems />
                    </div>
                </div>
                
            </div>
        );
    
}
}

export default dashboard;