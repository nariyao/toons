import React from 'react'

export default function ErrorPage({statusCode,msg}) {
    return (
    <div>
      <div style={{fontSize: "20rem", color:"#2e2e2e", textAlign: "center"}} >{statusCode}</div>
      <center style={{fontSize: "2rem", color:"#2e2e2e"}}>{msg}</center>
    </div>
  )
}
