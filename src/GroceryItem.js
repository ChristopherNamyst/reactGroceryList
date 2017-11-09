import React, {Component} from 'react';


class GroceryItem extends Component {
render(){
  return (
    <li>
      <div>{this.props.grocery.item}</div><div>{this.props.grocery.cost}</div>
    </li>
  )
};
}
export default GroceryItem;
