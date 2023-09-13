
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmark,setBookmark]=useState([]);
  const [marksRead,setMarksRead]=useState(0);

  const handleBookmark=(blog)=>{
   const newBookmarks=[...bookmark,blog]
   setBookmark(newBookmarks)
  }

  const handleMarksRead=(id,time)=>{
   setMarksRead(marksRead+time)
   //remove bookmark
    const remainingBookmarks=bookmark.filter(bookmarks=>bookmarks.id !== id)
    setBookmark(remainingBookmarks)
  }
  

  return (
    <>
     
     <Header></Header>
     <div className='max-w-screen-xl mx-auto gap-6 md:flex'>
     <Blogs handleBookmark={handleBookmark} handleMarksRead={handleMarksRead}></Blogs>
     <Bookmarks bookmark={bookmark} marksRead={marksRead}></Bookmarks>
     </div>
     
    </>
  )
}

export default App
