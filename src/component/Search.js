import React, { Component } from 'react';
import 'bulma/css/bulma.css'

class Search extends Component{
    constructor(props){
        super(props);
        this.state={search:''}
        this.handleonChange=this.handleonChange.bind(this);
        }

    handleonChange(e){
       this.setState({search: e.target.value})
       this.props.getInputValue(this.state.search);
    }
    render(){
        return(
            <div className="field has-addons">
            <div className="control">
              <input value={this.state.search} className="input" onChange={this.handleonChange} type="text" placeholder="Find a repository" />
            </div>
            <div className="control">
              <a className="button is-info">
                Search
              </a>
            </div>
          </div>

        )
    }
}

export default Search;