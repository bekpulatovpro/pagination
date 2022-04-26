import { USER_PER_PAGE } from "../utils/constants";
import React from 'react'
import Users from "./Users";


const User = ({ users, page }) => {
  const startIndex = (page - 1) * USER_PER_PAGE;
  const selectedUsers = users.slice(startIndex, startIndex + USER_PER_PAGE);

  return selectedUsers.map(user=>(
      <Users user={user} key={user.login.uuid}/>
  ));
};
export default User;
