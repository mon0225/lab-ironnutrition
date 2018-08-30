import React, { Component } from 'react';
import 'bulma/css/bulma.css';



class FoodBox extends Component {
  constructor(props){
    super(props);
    this.state={eventCount: 0};
    //this.functionPadre=props.functionPadre
  }
    incrementa=()=>{
      this.setState({ eventCount: this.state.eventCount + 1});
      this.props.functionPadre(this.state.eventCount);
    };

    componentWillUpdate(){
      console.log("EventCount", this.state.eventCount);
    }
    render() {
      
    return <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={this.props.image} width="180px"/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{this.props.name}</strong> <br />
          <small>{this.props.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input
            placeholder='0'
            className="input"
            type="number"
            onChange ={(e)=>{
              this.setState({eventCount: e.target.value})
            }} 
          />
        </div>
        <div className="control" onClick={()=>{
          this.setState({ eventCount: this.state.eventCount + 1})}
        }>
          <button className="button is-info">
          +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
}
}

export default FoodBox;