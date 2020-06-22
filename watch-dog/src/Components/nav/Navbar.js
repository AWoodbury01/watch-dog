import React, { Component } from "react";
import { Input, Menu, Label, Icon } from "semantic-ui-react";
import NavbarDrop from "./NavbarDrop";

export default class Navbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <Menu.Item
          name="home"
          href="/"
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
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item>
            <Label
              as="a"
              name="Profile"
              href="/profile"
              active={activeItem === "profile"}
              onClick={this.handleItemClick}
              icon
            >
          <Icon name="user" />
              User
            </Label>
          </Menu.Item>

        {/* Navbar drop test */}

          

          <Menu.Item
            name="logout"
            active={activeItem === "logout"}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
