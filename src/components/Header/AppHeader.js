import React from 'react'
import styled from 'styled-components'
import DropdownMenu from '../Dropdown/DropdownMenu'
import { menuData } from '../Dropdown/menuData'

function AppHeader(props) {
	return (
	  <nav style={{ display: 'flex', justifyContent: 'space-between', paddingRight: 260, paddingLeft: 200 }} className={props.className}>
		<Logo>VFCrypto</Logo>
		<ul style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
		  <li tabIndex="0" className="nav-item"><Title>{menuData[0].title}<Caret /></Title>
			<DropdownMenu data={menuData} />
		  </li>
		</ul>
	  </nav>
	);
  }

  const Logo = styled.h1`

  	font-size: 32px;
  `

  const Title = styled.span`
  `

  const Caret = styled.span`
	width: 0;
	height: 0;
	margin-left: 12px;
	border-top: 4px dashed;
	border-top: 4px solid;
	border-right: 4px solid transparent;
	border-left: 4px solid transparent; 
  `
  
  export default styled(AppHeader)`
	.nav-item {
		top: 2px;
		border-bottom: 1px solid #e7e7e7;
		width: 55px;
		height: 40px;
		line-height: 3.5;
		outline: none;
		
	  &:focus {
		pointer-events: none;
		cursor: pointer;
	  }

	}
	.nav-item:focus .dropdown {
	  opacity: 1;
	  visibility: visible;
	  pointer-events: auto;
	  outline: none;
	}
	
  `;