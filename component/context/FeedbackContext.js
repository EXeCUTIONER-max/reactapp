import {createContext, useState} from 'react'
import { v4 as uuidv4 } from "uuidv4";

const FeedbackContext = createContext() 

export const FeedbackProvider = ({children})=>{
  const [feedback, setFeedback] = useState([
    {
        id: 1,
        text: "This is coming from context",
        rating: 4,
    },
    {
      id: 2,
      text: "This is coming from context",
      rating: 5,
    },
    {
      id: 3,
      text: "This is coming from context",
      rating: 7,
    }
  ])

 const [editFeedback, setEditFeedback] = useState({
  item: {},
  edit: false
 })
  const feedbackEdit = (item)=>{
  setEditFeedback({
    item,
    edit: true,
  })
}

const updateFeedback = (id, UpdItem)=>{
  setFeedback(
  feedback.map((item)=> (item.id === id ? {...item, ...UpdItem} : item))
  )
}

  const addFeedHandler = (newfeedback)=>{
    newfeedback.id= uuidv4()
     setFeedback([newfeedback, ...feedback])
   }

   const deleteHandler = (id)=>{
    if (window.confirm("Are you sure you want to delete")){
      setFeedback(feedback.filter((item)=> item.id !== id))
    }

  return (
    <FeedbackContext.Provider value={{
    feedback, 
    addFeedHandler, 
    deleteHandler, 
    editFeedback, 
    feedbackEdit,
    updateFeedback
    }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}
}
export default FeedbackContext