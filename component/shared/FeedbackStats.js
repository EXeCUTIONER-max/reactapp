import PropTypes from "prop-types"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"


function FeedbackStats({feedback}) {
  const {feedback} = useContext(FeedbackContext)

  let average = feedback.reduce((acc, cur)=>{
        return acc + cur.rating
    }, 0) / feedback.length

    average = average.toFixed(1)
  
    return (
    <div className="feedstats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Ratings: {isNan(average) ? 0 : average}</h4>
    </div>
  )
}



FeedbackStats.propTypes = {
    fback: PropTypes.array.isRequired
}

export default FeedbackStats