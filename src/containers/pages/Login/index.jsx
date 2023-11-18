import React from 'react'
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div>
      <p>Login Page</p>
      <button>
            <Link to="/">Go to Dashboard</Link>
          </button>
          <button>
            <Link to="/register">Go to Register</Link>
          </button>
    </div>
  )
}

export default index