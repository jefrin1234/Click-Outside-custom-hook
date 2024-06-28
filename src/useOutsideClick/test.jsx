import React, { useRef, useState } from 'react'
import useOutsideClick from '.'

function UseOnclickOutSideTest() {
  const ref = useRef()
  useOutsideClick(ref,()=>{
    setShowContent(false)
  })
  const [showContent,setShowContent] = useState(false)

  return (
    <div ref={ref}>
      {
        showContent ? <div><h1>this is a random content</h1>
        <p>Please click outside of this to close this .It wont close if you click inside of this content</p></div> : <button onClick={()=>{
          setShowContent(true)
        }}>Show Content</button>
      }
    </div>
  )
}

export default UseOnclickOutSideTest
