import React from 'react'
import NmitUseState from './component/nmitUseState'
import NmitUseEffect from './component/nmitUseEffect'

export default function NvkApp() {
  return (
    <div className='container border border my-2'>
      <h1>Demo React Hook</h1>
      <NmitUseState />
      <NmitUseEffect />
    </div>
  )
}