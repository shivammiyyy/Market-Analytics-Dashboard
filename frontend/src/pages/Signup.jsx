import { SignUp } from '@clerk/clerk-react'
import React from 'react'

const Signup = () => {
    
  return (
    <SignUp afterSignInRedirectUrl='/dashboard'/>
  )
}

export default Signup