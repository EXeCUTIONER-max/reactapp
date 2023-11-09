import { useEffect, useState, useContext } from "react"
import Card from "./Card"
import Button from "./Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";


function FeedbackForm() {
    const [text, setText] = useState("");
    const {addFeedHandler, editFeedback} = useContext(FeedbackContext)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState();

    useEffect(()=>{
      if (editFeedback.edit === true) {
        setBtnDisabled(false)
        setText(editFeedback.item.text);
        setRating(editFeedback.item.rating)
      }
    }, [editFeedback])

    const handleTextChange = (e) => {
       if (text === "") {
        setBtnDisabled(true)
        setMessage(null)

       }else if(text !== "" && text.trim().length <= 10){
        setBtnDisabled(true)
        setMessage(<span className="deeppink">"Review must be at-least 10 characters"</span>)
       }else{
        setBtnDisabled(false)
        setMessage(null)
       }

       setText(e.target.value)
    }

    const handleSubmit = (e)=>{    
      e.preventDefault()
      if (text.trim().length > 10)
         const newFeedBack ={
           text: text,
           rating: rating
        }

       if (editFeedback.edit === true) {
         updateFeedback(editFeedback.item.id, newFeedBack)
       }else{
         addFeedHandler(newFeedBack);
       }

        setText("")
      }
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h3>How would you like to rate our service</h3>
            <RatingSelect select={(rating)=> setRating(rating)} />
            <div className="input-group">
              <input 
              type="text" 
              value={text}
              onChange={handleTextChange}
              placeholder="Write a review" 
              />
              <Button type="submit" isDisabled={btnDisabled}>Send</Button>
              {message && <div>{message}</div>}
            </div>
        </form>
    </Card>
  )
}

export default FeedbackForm