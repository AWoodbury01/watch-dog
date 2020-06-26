import React from "react";
import { Button, Dropdown } from "semantic-ui-react";

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
    href: "/",
    onClick: ()=> localStorage.clear()
  }
];

const profileDropdown = () => (
  <Button.Group color="teal">
    <Button>{localStorage.getItem("userName")}</Button>
    <Dropdown
      className="button icon"
      floating
      options={options}
      trigger={<></>}
    />
  </Button.Group>
);

export default profileDropdown;
