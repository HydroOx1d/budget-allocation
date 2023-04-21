import React from 'react'
import Table from './compoennts/table/Table'
import mockData from './mock_stores.json'

const App = () => {
  return (
    <div>
      <Table data={mockData}/>
    </div>
  )
}

export default App