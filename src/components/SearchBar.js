import React from "react";

class SearchBar extends React.Component{

    state = {inputText : ''}
    onFormSubmit = (event) =>{
         event.preventDefault();
         this.props.onSearch(this.state.inputText);
    }

    render(){
        return(
            <div className="ui segment">
               <form className="ui form" onSubmit={this.onFormSubmit}>
                   <div className="searchBar">
                      <label>Image Search</label>
                      <input type="text" onChange={(event) => this.setState({inputText : event.target.value})}
                        value={this.state.inputText}></input>
                   </div>
               </form>  
            </div>
        );
    }
}


export default SearchBar;