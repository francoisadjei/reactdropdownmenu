import React, { useState } from 'react'
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import DropdownMenu from 'react-bootstrap/DropdownMenu';


class Dropdown extends React.Component {
//export const Dropdown = (props) => {
    render() {
    const [DropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState)

    return (
        <Dropdown isOpen={DropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
               Dropdown
               <DropdownMenu>
          <Dropdown>
            <Dropdown>Header</Dropdown>
            <Dropdown>Action</Dropdown>
            <Dropdown>Another Action</Dropdown>
            <Dropdown>Another Action</Dropdown>
            </DropdownMenu>
          </Dropdown>
          }
          }

      );
    }


export default Dropdown 