import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const DropdownComponent = ({ label, options, selected, onSelect }) => {
  return (
    <DropdownButton id="dropdown-basic-button" title={label}>
      {options.map((option, index) => (
        <Dropdown.Item key={index} onClick={() => onSelect(option)}>
          {option}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default DropdownComponent;