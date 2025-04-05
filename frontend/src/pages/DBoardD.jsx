import React from 'react'
import { useParams } from 'react-router-dom'

export const DBoardD = () => {
    const {company} = useParams();

  return (
    <div>{company}</div>
  )
}
