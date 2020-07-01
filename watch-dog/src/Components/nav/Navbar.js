import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import NavbarDrop from "./NavbarDrop";
import Search from "../search/Search"

export default class Navbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <Menu.Item
          name="home"
          href="/home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Movies"
          href="/movies"
          active={activeItem === "Movies"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="TV Shows"
          href="/shows"
          active={activeItem === "TV Shows"}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            {/* <Input icon="search" placeholder="Search..." /> */}
            <Search />
          </Menu.Item>
        <Menu.Item>
          <NavbarDrop />
        </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
