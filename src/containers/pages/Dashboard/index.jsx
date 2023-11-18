import React from 'react'
import { Link } from "react-router-dom";


const index = () => {
  return (
    <div>
      <p>Dashboard Page</p>
        <button>
          <Link to="/register">Go to Register</Link>
        </button>
        <button>
          <Link to="/login">Go to Login</Link>
        </button>
    </div>
  )
}

export default index