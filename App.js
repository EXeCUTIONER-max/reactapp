import { useState } from 'react';
import { v4 as uuidv4 } from "uuid"
import Header from './New folder/Header';
import FeedbackItem from "./New folder/FeedbackItem";
import FeedbackData from "./New folder/data/FeedbackData"; 
import FeedbackList from "./New folder/FeedbackList";
import FeedbackStats from './New folder/shared/FeedbackStats';
import FeedbackForm from './New folder/shared/FeedbackForm';
import AboutPage from './New folder/shared/AboutPage';
import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import AbouticonLink from './New folder/shared/AbouticonLink';
import Post from './New folder/Post';
import Card from './component/shared/Card';
import { FeedbackProvider } from './New folder/context/FeedbackContext';


function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  return(
    <>
  {/* <FeedbackProvider> */}
      {/* <Router> */}
gg        <Header />
    <div className="container">
      {/* <Routes> */}
        {/* <Route exact path="/"  */}
        {/* element={ */}
          {/* <> */}
          <FeedbackForm />
          <FeedbackStats 
          />
          <FeedbackList handleDelete={deleteHandler}/>
          </div>
          </>
        {/* } 
        />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>

      <Card>
        <NavLink to="/" activeclassname="active">
         Home
        </NavLink>
        <NavLink to="/about" activeclassname="active">
         About
        </NavLink>
      </Card> */}
      // <AbouticonLink />
    // </Router>
        // </FeedbackProvider>
    /</>
    )
  }
    

  export default App
    