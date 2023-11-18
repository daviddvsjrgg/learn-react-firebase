import React from 'react'
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div>
      <p>Register Page</p>
        <button>
            <Link to="/">Go to Dashboard</Link>
          </button>
          <button>
            <Link to="/login">Go to Login</Link>
          </button>
    </div>
  )
}

export default index