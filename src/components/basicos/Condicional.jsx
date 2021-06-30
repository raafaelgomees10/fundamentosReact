import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

  return (
    <div>
      <h2>O numero é {props.numero}</h2>
      {props.numero % 2 === 0 ?
        <span>par</span>
        : <span>impar</span>
      }



    </div>
  )
}