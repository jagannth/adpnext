import React from 'react'

export default function course({params:params}) {
  return (
    <div>
      Course name: {params?.course}
    </div>
  )
}
