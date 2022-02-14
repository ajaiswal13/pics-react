import React from "react";
class ImageCard extends React.Component{

    constructor(props){
         super(props);
         this.ref = React.createRef();
         this.state = { spanNumber : 0};
    }

    componentDidMount(){
        this.ref.current.addEventListener('load',this.setSpans);
    }
    setSpans = () => {
        const height = this.ref.current.clientHeight;
        const numberOfSpans = Math.ceil(height/10);
        this.setState({spanNumber : numberOfSpans});
    }

    render(){

          const {description,urls} = this.props.image;
          return(
                  <div style={{gridRowEnd : `span ${this.state.spanNumber}`}}>
                      <img ref={this.ref} alt={description} src={urls.regular}/>
                  </div>
          );
     }
}

export default ImageCard;