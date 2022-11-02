import React from 'react'
import { useLocation, Link } from 'react-router-dom';

export default function NotFound() {
    const location = useLocation()
  return (
    <>
    <h3>No Led Zeppelin here: {location.pathname}</h3>
    <Link to="/">Go back to real rock</Link>
    </>
  )
}
