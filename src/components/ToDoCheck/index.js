import React, { useState } from 'react'

export default function ToDoCheck({checkAll}) {

  return (
    <>

    <div className="check-all-container">
          <div>
            {/* <button type="button" className="button" onClick={()=>checkAll()}>Check All</button> */}
            <button type="button" className="button" >Check All</button>
          </div>

          <span>3 items remaining</span>
        </div>
    </>
  )
}
