import React, {Component} from 'react';
import './post-add-form.css';

export default class PostAddForm extends Component {

  state = {
        value: ''
  };

  handleChange =(event)=> {
      
    this.setState({value: event.target.value});
    
                    
  }

  handleSubmit =(event)=>{
    if (this.state.value === ''){
      event.preventDefault();
      

    } else {
      event.preventDefault();
    this.props.OnAdd(this.state.value);
    this.setState({value:''}); 
    }
  }
    
    
  
    render() {
      
      return (
        <form className="bottom-panel d-flex" onSubmit={this.handleSubmit}>
          
            <input type="text" className="form-control new-post-label" value={this.state.value} onChange={this.handleChange} />
         
          <input type="submit" value="Добавить"  className="btn btn-outline-secondary" />
       
        </form>
      );
    }
  }

