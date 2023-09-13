
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmark,setBookmark]=useState([])
  const handleBookmark=(blog)=>{
   const newBookmarks=[...bookmark,blog]
   setBookmark(newBookmarks)
  }
  

  return (
    <>
     
     <Header></Header>
     <div className='max-w-screen-xl mx-auto gap-6 md:flex'>
     <Blogs handleBookmark={handleBookmark}></Blogs>
     <Bookmarks bookmark={bookmark}></Bookmarks>
     </div>
     
    </>
  )
}

export default App
