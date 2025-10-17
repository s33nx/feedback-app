import { useState } from "react"
import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom'
import { v4 as uuidv4 } from "uuid" 
import Header from "./components/Header"
import AboutIconLink from "./components/AboutIconLink"
import FeedbackListItem from "./components/FeedbackListItem"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackData from "./data/FeedbackData"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import { FeedbackProvider } from "./context/FeedbackContext"

function App(){
    const [feedback, setFeedback] = useState(FeedbackData)
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
      <FeedbackProvider>
    <Router>
    <Header /> 
    <div className="container">

    <Routes>
      <Route path="/" element={
        <>
          <FeedbackForm handleAdd={addFeedback}/>
          <FeedbackStats />
          <FeedbackListItem   handleDelete={deleteFeedback}/>
        </>
      } />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
     
    <AboutIconLink />
    </div>
    </Router>
    </FeedbackProvider>
    )
}
export default App