// src/pages/HomeRedirect.jsx
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from '@tanstack/react-router'

const HomeRedirect = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  return <Navigate to={isAuthenticated ? '/dashboard' : '/auth'} />
}

export default HomeRedirect
