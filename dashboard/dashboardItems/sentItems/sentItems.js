import React from 'react';
import './sentItems.css';
import axios from 'axios';


class sentItems extends React.Component{
    
    constructor(props){
        super(props)

        this.state = {
            forms: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users' , {
            params: {
              
            }
          })

        .then(Response => {
            console.log(Response)
            this.setState({forms: Response.data})
        })

        .catch(error => {
            console.log(error)
        })
    }

    render(){
        const {forms} = this.state
        return(
            <div>
               <div>
                        <hr></hr>
                    <div className='inbox'>
                        <div>
                            <p><h3>Sent Items</h3>
                            <button type="button" class="btn btn-outline-primary">Primary</button>
                            
                            </p>
                        </div>

                        <div>

                        </div>
                      {forms.map(form =>
                        <div>
                        <div class="card">
                            <h5 class="card-header">Vehicle resevationg form</h5>
                            <div class="card-body">
                                <p class="card-text">Requested by {form.name}</p>
                                <p class="card-text">Contact {form.phone}</p>
                                <a href="/getting" class="btn btn-primary">Look form</a>
                            </div>
                        </div>
                        <div>
                            <hr></hr>
                        </div>
                        </div>

                        )}  
                    

                                

                    </div>

                </div>
            </div>

           
            
        );
    }
}

export default sentItems;