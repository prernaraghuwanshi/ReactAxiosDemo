import React, { Component } from 'react'
import '../employee.css'
class Employee extends Component {
    
    render() { 
        return ( 
            <div className='employee'>
                <h3>{this.props.id}</h3>
                <h3>{this.props.name}</h3>
            </div>

            
         );
    }
}
 
export default Employee;