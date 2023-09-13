
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmark,setBookmark]=useState([])
  const handleBookmark=(bookmark)=>{
    console.log('bookmark adding soon')
  }
  

  return (
    <>
     
     <Header></Header>
     <div className='max-w-screen-xl mx-auto md:flex'>
     <Blogs handleBookmark={handleBookmark}></Blogs>
     <Bookmarks></Bookmarks>
     </div>
     
    </>
  )
}

export default App
