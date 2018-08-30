import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.js';
import FoodBox from './component/FoodBox'
import Search from './component/Search'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      search:'',
      eventCounter:0,
      //FoodBox:''
    }
  }

  functionPadre=(eventCounter)=>{
    console.log('eventCounter')
  }
  getInputValue=(search)=>{
    this.setState({search})
    if(this.state.search !== ''){
      this.nuevoArreglo = foods.filter((food)=>{
        return food.name.toLowerCase().indexOf(this.state.search.toLowerCase()) >= 0
      });
      console.log(this.nuevoArreglo);
    }
  }
nuevoArreglo = [];

/*plusFoodBox=(FoodBox)=>{
  this.setState({FoodBox})
      return for(i=0; food.lenght=>i; i++)
    console.log(this.nuevoPlusFoodBox;
  }
}
nuevoPlusFoodBox = [];*/

  render() {
    return (  
  <div className="App">
    <Search getInputValue={this.getInputValue} />
    {this.nuevoArreglo.lenght === 0 ?
      foods.map((food)=> {
        return <FoodBox {...food} />
      }): this.nuevoArreglo.map((food, index)=>{
        return <FoodBox name={food.name} calories={food.calories} quantity={food.quantity} key={index} functionPadre={this.functionPadre} eventCounter={this.eventCounter}/>
      })
    }

   </div>
  )
}
}  
       
   


export default App;
