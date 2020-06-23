import React from "react";
import { Route } from "react-router-dom";
import { Button, Dropdown } from "semantic-ui-react";
import ProfilePage from "../profile/ProfilePage";

const options = [
  {
    key: "edit",
    icon: "user circle",
    text: "My Account",
    value: "edit",
    href: "/profile"

  },
  {
    key: "hide",
    icon: "log out",
    text: "Logout",
    value: "hide",
    onClick: () => console.log("logout button"),
  }
];

const profileDropdown = () => (
  <Button.Group color="teal">
    <Button>User Name</Button>
    <Dropdown
      className="button icon"
      floating
      options={options}
      trigger={<></>}
    />
  </Button.Group>
);

export default profileDropdown;
