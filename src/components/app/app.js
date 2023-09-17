import React, {Component}  from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
// import Toggles from '../toggle/toggle';
import './app.css';
import styled from 'styled-components';
// import { useId } from "react-id-generator";

const AppBlock = styled.div `
        margin: 0 auto;
        max-width: 800px;
         `;
 const StyledAppBlock = styled(AppBlock)`
 
        background-color: inherit;
        `;



export default class App extends Component {
    state = {
        data:[
            {label: 'I need job!!!', important: false, like: false, id:Math.random().toString(33).substring(2)},
            {label: 'I love my God!!!', important: false, like: false, id:Math.random().toString(33).substring(2)},
            {label: 'I feel good!!!', important: false, like: false, id:Math.random().toString(33).substring(2)}
        ],
        term:'',
        filter:'all'

    };

  
    OnAddItem=(body)=> {
        const newItem = {
            label: body,
            important: false,
            id: Math.random().toString(33).substring(2)
        }
       
        this.setState(({data}) => {
            const newArrs = [...data, newItem];
            return {
                data: newArrs
                    
            }
      
        });
               
    }

    likePosts = (data, filter) => {
        if (filter === 'like' && data.filter(item =>item.like).length !== 0) {
            return data.filter(data =>data.like);
            

        }
        
        return data; 

          
    }
   

    searchPost = (data,term) => {
        if (term === '') {
            return data;
        }

        return data.filter( (data) => data.label.indexOf(term) > -1);
    }

    onFilterSelect = (filter) => {
       
        this.setState({filter});

       
        
        
    }

    onUpdateSearch = (term) => {
        this.setState({term: term})
    }
   
    deleteitem=(id)=>{
        this.setState(({data}) => {
          const index = data.findIndex(elem => elem.id === id) 
          const before = data.slice(0,index);
          const after = data.slice(index + 1);
          const newArr = [...before,...after];
          return{
            data:newArr
           }
        });
      
    }

    OnToggleImportant=(id)=>{
        this.setState(({data}) => {
            const index =data.findIndex(elem => elem.id ===id);
            const old = data[index];
            const newItem = {...old, important: !old.important}
            const newArr = [...data.slice(0,index),newItem,...data.slice(index +1)];

            return{
                data:newArr
            }

        })
        

    }

    OnToggleLike=(id)=>{
        this.setState(({data}) => {
            const index =data.findIndex(elem => elem.id ===id);
            const old = data[index];
            const newItem = {...old, like: !old.like}
            const newArr = [...data.slice(0,index),newItem,...data.slice(index +1)];

            return{
                data:newArr
            }

        })
        
    }


    render() {
        const {data, term, filter} =this.state;
        const liked = data.filter(item =>item.like).length;
        const allPosts = data.length;
        const visiblePosts = this.likePosts(this.searchPost(data, term),filter);
      
      

        return ( 
            <StyledAppBlock>
                <AppHeader
                 liked={liked}
                 allPosts={allPosts}/>
               
                <div className="search-panel d-flex">
                    
                    <SearchPanel
                    onUpdateSearch = {this.onUpdateSearch}/>
                    <PostStatusFilter
                    filter ={filter}
                    onFilterSelect  = {this.onFilterSelect}/>
                                      
                </div>
                
                <PostList 
                  
                    posts={visiblePosts}
                    OnDelete = {this.deleteitem}
                    OnToggleImportant={this.OnToggleImportant}
                    OnToggleLike={this.OnToggleLike} />
             
                <PostAddForm
                    OnAdd={this.OnAddItem}
                    />
               
                </StyledAppBlock>
        
        )
    }


    
    

} 

    


