import React from 'react';
import { Link, useParams } from 'react-router-dom';


function User() {
  // Replace ... with the username retrieved from the URL parameter
  const params = useParams();
  return (
    <div>
      <p>Hello {params.username} !</p>
    </div>
  );
}

export default User;
