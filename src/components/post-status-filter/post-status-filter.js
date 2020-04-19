import React, {Component} from 'react';
import { Button } from 'reactstrap';
import './post-status-filter.css';

export default class PostStatusFilter extends Component {
    buttons = [
        {name: 'all', label:'Все'},
        {name: 'like', label:'Понравилось'},
    ] 

    render() {
        const buttons = this.buttons.map(({name,label})=> {
            const active = this.props.filter === name;
            const clazz = active ? 'btn-info' : 'bnt-outline-secondary'
            return (
            <Button key={name}
                    type="button"
                     className={`btn ${clazz}`}
                     onClick = {() => this.props.onFilterSelect(name)}>{label}</Button>
            )
        })
      

        return (
            <div className="btn-group">
                {buttons}
                
            </div>
        )
    }
  
}

