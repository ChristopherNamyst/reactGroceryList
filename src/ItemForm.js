import React, {Component} from 'react';

class ItemForm extends Component {

  constructor(props) {
    super(props);
    //Set Up the initial state in constructor.
    //here lies the initial values for the form
    this.state = {
      item: "",
      cost: "",
      quantity: ""
    };
  }


render() {

  return (<form className="ItemForm"
    onSubmit= {this.handleSubmit.bind(this)}>
    <h2>Please Add an Item</h2>
    <p>

    </p>
    <p>
      <label>Item</label>
      <input value={this.state.item} onChange={this.handleItemChange.bind(this)}/>
    </p>
    <p>
      <label>Cost</label>
      <input type="Cost" value={this.state.cost}
        onChange={this.handleCostChange.bind(this)}/>
    </p>
    <p className="GroceryItem_button-bar">
      <button type="Submit">ADD ITEMS</button>
    </p>
  </form>);
};

handleItemChange(event) {
  this.setState({
    item: event.target.value});
}
handleCostChange(event) {
  this.setState({
    cost: event.target.value});
}
handleSubmit(event) {
  //by default, a form submission refreshes the page
  //preventDefault will stop this
  event.preventDefault();
  //call the function that App.js passes into the onSubmit function
  //pass thru a new grocery item
  this.props.onSubmit({
    item: this.state.item,
    cost: this.state.cost});
}
};

export default ItemForm;
