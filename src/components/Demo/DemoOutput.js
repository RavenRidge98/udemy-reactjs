import React from 'react'

const DemoOutput = (props) => {
    console.log("DemoOutput Run")
  return (
    <p>
        {props.onClick ? 'This is new!' : 'This is already there!'}
    </p>
  )
}

export default React.memo(DemoOutput);