import React from 'react';
import styled from 'styled-components';

class DropdownMenu extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: ""
    }
    this.handleMenuClick = this.handleMenuClick.bind(this)
  }

  handleMenuClick(e) {
    console.log(e.target.value)
  }
  render() {
    const { className, data } = this.props;
    return (
     
      <div className={className}>
        <ul className="dropdown">
          {data.map(item => {
            const { title } = item;
            return (

                  <li key={title} onClick={this.handleMenuClick} value={title}>{title}</li>

            );
          })}
        </ul>
      </div>
    );
  }

}

export default styled(DropdownMenu)`
  .dropdown {
    display: flex;
    justify-content: space-between;
    outline: none;
    visibility: hidden;
    transition: visibility 0.5s;
    top: 100%;
    position: relative;
    right: 140px;
    min-width: 80px;
    padding: 5px 0;
    margin: 2px 0 0;
    font-size: 14px;
    flex-direction: column;
    align-items: center;
    list-style: none;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
  }
  .dropdown__item {
    cursor: pointer;
    text-align: left;
    line-height: 24px;
    font-size: 14px;
    outline: none;
    
    a {
      margin: 8px 16px;
      text-decoration: none ;
      display: block;
      span {
        white-space: nowrap;
        overflow: hidden;
        color: #4a4d55;
      }
    }
  }
`;