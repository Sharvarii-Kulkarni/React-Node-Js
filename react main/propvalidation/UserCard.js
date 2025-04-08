import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({ name, age, isStudent }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
      <p>Status: {isStudent ? "Student" : "Not a Student"}</p>
    </div>
  );
};

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool
};

export default UserCard;
