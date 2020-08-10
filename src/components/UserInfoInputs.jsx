import React from 'react';
import DefaultTextInput from './DefaultTextInput';
import './UserInfoInputs.css'

const UserInfoInputs = ({
  onChange, userValues
}) => {
  return (
    <div className="UserInfoInputs">
      <p>Enter your first name</p>
      <DefaultTextInput onChange={onChange('firstName')} value={userValues.firstName} />
      <p>Enter your last name</p>
      <DefaultTextInput onChange={onChange('lastName')} value={userValues.lastName} />
    </div>
  );
};

export default UserInfoInputs;