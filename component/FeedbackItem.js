import {useContext, useState} from  "react"
import Card from "./shared/Card"
import { BsX, BsPencilSquare } from "react-icons/bs"
import FeedbackContext from "./context/FeedbackContext"

function FeedbackItem({ feedbody }) {
   const {deleteHandler, feedbackEdit} = useContext(FeedbackContext)
  return (
    <Card>
        <div className="num-display">{feedbody.rating}</div>
    <button onClick={()=> deleteHandler(feedbody.id)} className="close">
     <BsX />
    </button>
    <button onClick={()=> feedbackEdit(feedbody)} className="edit">
      <BsPencilSquare color="purple"/>
    </button>
       <div className="text-display">{feedbody.text}</div>
    </Card>
  );
}

export default FeedbackItem;