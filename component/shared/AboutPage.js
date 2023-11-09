import Card from "./Card"
import { Link } from "react-router-dom"


function AboutPage() {
  return (
    <Card>
    <div>
        <h1>About This Project</h1>
        <p>This is a React App to leave reviews about a product or service</p>
        <p>Version 1.3.5</p>

        <p>
            <Link to="/">Back to Home</Link>
        </p>
    </div>
    </Card>
  )
}

export default AboutPage