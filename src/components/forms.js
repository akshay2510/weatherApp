import React,{Component} from 'react';
class Forms extends Component {
    render(){
        return(
               <div>
               
               <form onSubmit={this.props.getweather}>
                   <input type='text' name='city' placeholder='City'/>
                   <input type='text' name='country' placeholder='Country' />
                   <button>Get weather</button>
               </form>
               </div>
        )
    };
}
export default Forms;