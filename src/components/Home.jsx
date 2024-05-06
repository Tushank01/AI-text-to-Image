import React,{useState, useEffect} from 'react'
import {collection, getDocs} from "firebase/firestore"
import {db} from '../firebase-config' 
import {CircularIndeterminate} from '../loadinganimation'
import DisplayPost from './DisplayPost'

function Home() {
  const [allPost, setAllPost] = useState([])
  const [loading, setLoading] = useState(true)
  const postRef = collection(db,"post")

  useEffect(()=>{
    setLoading(true)
    const getPosts = async () => {
      await getDocs(postRef)
      .then(data=>{
        setAllPost(data.docs.map(doc=>({...doc.data(),id: doc.id})))
        setLoading(false)
      })
    }
    getPosts()
  },[])

  return (
    <div className='container mt-2' style={{marginTop: "40px"}}>
      
      <h1 className='font-extrabold text-[40px]'>The Community  <span>Showcase</span></h1>
    <p className='mt-2 text-[15px] max-w-[500px]' style={{ fontFamily:"cursive", fontWeight: "" }} >welcome to text-to-image generation post</p>
    <div className="m-10">
      {loading?(
        <div className="flex justify-center items-center">
          <CircularIndeterminate/>
        </div>

      ): 
      
      (
        <div className='grid lg:grid-cols-4 sm:grid-cols xs:grid-cols-2 grid-cols-1 gap-3'>
        {allPost && allPost.map(post=>(
          <DisplayPost post={post}/>
        ))}
        </div>
      )}

    </div>
    </div>
  )
}

export default Home