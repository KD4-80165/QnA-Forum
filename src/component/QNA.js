import React from 'react'
import '../css/QNA.css'
import Feed from './Feed'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Widget from './Widget'

function QNA() {
  return (
    <div className="qna">
      <Navbar />
      <div className='qna__content'>
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  )
}

export default QNA
