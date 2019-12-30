// TODO
var GroceryList = (props) => (
  <div>
  <ul>
    {props.groceries.map((grocery, i) =>
    <GroceryListItem key ={i} groceries = {grocery}/>
    )}
  </ul>
  </div>
);

class GroceryListItem extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    }
  };

  onListItemHover() {
    this.setState({
      hover: !this.state.hover
    });
  }


render() {
  var style = {
    fontWeight: this.state.hover ? 'bold' : 'normal'
  }
  return (
    <li style = {style} onMouseOver = {this.onListItemHover.bind(this)}>{this.props.groceries}</li>
  );
 }

};



ReactDOM.render(<GroceryList groceries={['Pickles', 'Kale']} />, document.getElementById("app"));
