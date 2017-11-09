import React, {Component} from 'react';
import GroceryItem from './GroceryItem';
//define the shoppingList componentusing ES6 syntax?
class ShoppingList extends Component {

  render() {
  const listItems = this.props.groceries.map((listItem, index) =>
   (<GroceryItem key={listItem.item} listItems="{listItem}" onDelete={() => this.removeItem(index)}/>));

   {
    //here we call the delete button function/ component when clicked
    return (<div className="ShoppingList">
      <div className="ListItem">{this.props.groceries.item}</div>
      <div className="ListPrice">{this.props.groceries.cost || "No Price"}</div>
      <button className="ItemDelete-button" title={"Delete " + this.props.groceries.item} onClick={this.props.onDelete}>
        <i className="fa fa-trash fa-lg"></i>
      </button>
    </div>);
  }

}
}

//Now we have to specify that our ShoppingList component is default export of THIS file
export default ShoppingList;
