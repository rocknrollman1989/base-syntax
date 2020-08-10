import React from 'react';

const UserInfo = ({ firstName, lastName }) => {
  return (
    <p>
      Hello {firstName} {lastName}, this is your first React App! =)
    </p>
  )
}

export default UserInfo;