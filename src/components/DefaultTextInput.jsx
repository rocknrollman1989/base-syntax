import React from 'react';

const DefaultTextInput = ({ onChange, value }) => {

  const style = {
    borderRadius: '5px',
    border: '1px solid',
    padding: '3px',
  }

  return <input type="text" onChange={onChange} value={value} style={style} />
}

export default DefaultTextInput;