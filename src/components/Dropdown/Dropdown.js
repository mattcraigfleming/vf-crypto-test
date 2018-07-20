import React from 'react'
import DropdownMenu from 'components/Dropdown/DropdownMenu'
  
  export default class Dropdown extends React.Component {
    constructor (){
      super();
      
      this.state = {
        toggled: false,
        selected: "ß"
      };
    }
    
    toggleDropdown () {
      this.setState({toggled: !this.state.toggled});
    }
  
    handleClick(value) {
      this.setState({selected: value});
      console.log(this.state.selected)
    }
  
    render () {
      var className="dropdown-container";
      
      if (this.props.className) {
        className += " " + this.props.className;
      }
  
      var dropdown = React.Children.map(
        this.props.children, (child, i) => {
        
        var clonedProps = {};
        clonedProps.click = this.handleClick.bind(this, i);
  
        return React.cloneElement(child, clonedProps);
      });
  
      return (
        <div className={className} 
          onClick={this.toggleDropdown.bind(this)}>
          <div className="dropdown-active">
            {this.props.children[this.state.selected]}
          </div>
          <DropdownMenu toggled={this.state.toggled} >
            {dropdown}
          </DropdownMenu>
        </div>
      );
    }
  }
  