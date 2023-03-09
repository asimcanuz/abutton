import React from 'react'

import { Button } from 'abutton'
import 'abutton/dist/index.css'

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Button type={'default'}>Create React Library Example </Button>
      <Button type={'primary'}>Create React Library Example </Button>
      <Button type={'dashed'}>Create React Library Example </Button>
      <Button type={'text'}>Create React Library Example </Button>
      <Button type={'link'}>Create React Library Example </Button>
    </div>
  )
}

export default App
