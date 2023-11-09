import React from 'react'
import FeedbackItem from './Feedbackitem';
import { useContext } from "react"
import FeedbackContext from './context/FeedbackContext';

function Feedbacklist({ handleDelete }) {
    const {feedback} = useContext(FeedbackContext)

    if (!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>;
    }
    return(
    <div>
        {feedback.map((item)=> (
            <FeedbackItem key={item.id} feedbody={item}
            deleteFeedback={handleDelete}/>
        ))};
    </div>
    )
        }
    export default Feedbacklist

