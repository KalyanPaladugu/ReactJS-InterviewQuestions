import React from 'react'
const Child = React.memo(({ handleClick }) => {
    console.log("Child component rendered");
    return (    <>
     <button onClick={handleClick}>Child Button</button>
    </>  )
})

export default React.memo(Child);