import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component{

    state = {images : []}
    onSearchSubmit =  async (inputText) => {
        const response = await unsplash.get('/search/photos',{
            params : {
                query : inputText
            }
         });
         this.setState({images : response.data.results});
    }

    render(){
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSearch={this.onSearchSubmit}></SearchBar>
            <ImageList imageList={this.state.images}></ImageList>
            </div>
       );
    }
}

export default App;