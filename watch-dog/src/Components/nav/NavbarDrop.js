import React from 'react'
import { Route } from 'react-router-dom'
import { Button, Dropdown } from 'semantic-ui-react'
import ProfilePage from "../profile/ProfilePage"


const options = [
  { key: 'edit', icon: 'user circle', text: 'My Account', value: 'edit', onClick:() =>         <Route exact path="/profile" render={(props) => {
    return <ProfilePage {...props} />;
  }} />
},
  { key: 'hide', icon: 'log out', text: 'Logout', value: 'hide', onClick: () => console.log("You clicked the log out button") },
]

const profileDropdown = () => (
  <Button.Group color='teal'>
    <Button>User Name</Button>
    <Dropdown
      className='button icon'
      floating
      options={options}
      trigger={<></>}
    />
  </Button.Group>
)

export default profileDropdown
