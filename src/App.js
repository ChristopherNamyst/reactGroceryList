import React, {Component} from 'react';
import './index.css';
import ItemForm from './ItemForm';
import ShoppingList from './ShoppingList';
//import GroceryItem from '/GroceryItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [
      {
        item: "Popcorn",
        cost: 2,
        quantity: 1
      },
      {

        item: "Goat Cheese",
        cost: 3,
        quantity: 1
      },
      {

        item: "Durian",
        cost: 5,
        quantity: 1
      },
      {

        item: "Apples",
        cost: 4,
        quantity: 1
      },
      {

        item: "Matcha Tea",
        cost: 5,
        quantity: 1
      }
    ]

};
}

  render() {


    return (
      <div className="App">
      <h1>Grocery List</h1>
      <div className="App__contacts">
        <ShoppingList groceries={this.state.groceries}/>
        <ItemForm onSubmit={this.addItem.bind(this)}/>
      </div>
    </div>
  );
}

  addItem(groceries) {
    this.setState(prevState => {
      // Important: Copy contacts array before modifying. We should not modify
      // the original. React it very clear that arrays and objects in your
      // state must be immutable. So we need to create a NEW array and set
      // that as the new contacts state. React has found this prevents
      // unexpected bugs.
      const newItems = prevState.groceries.slice(0);
      newItems.push(groceries);

      //updates the grocery list
      return {groceries: newItems};

    });

  }

removeItem(index) {
  this.setState(prevState =>{
    //Copy Item array before changing
    const newItems = prevState.groceries.slice();
    newItems.splice(index,1); //removes items at this index

    //updates content in state
    return {groceries: newItems};

  });
}
}

//We must specify that our App component is the default export of THIS file
//May or may not see this on line 5 of index.js
export default App;
