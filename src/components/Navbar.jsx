import React from 'react';
import { Link } from 'react-router-dom';

const users = ['woody', 'buzzlightyear', 'jessie', 'bullseye', 'potatohead'];

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          Users
          <ul>
          {users.map((username) => {
              return (
                <li key={username}>
                  <Link to={`/users/${username}`}>{username}</Link>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
