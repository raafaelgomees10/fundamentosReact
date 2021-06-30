import React from 'react'
import If from './If'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

  return (
    <div>
      <h2>O numero é {props.numero}</h2>
      <If test={props.numero % 2 === 0}>
        <span>par</span>

      </If>
      <If test={props.numero % 2 === 1}>

        <span>impar</span>
      </If>

    </div>
  )
}