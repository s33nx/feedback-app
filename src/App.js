import { useState } from "react"
import { v4 as uuidv4 } from "uuid" 
import Header from "./components/Header"
import FeedbackListItem from "./components/FeedbackListItem"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackData from "./data/FeedbackData"
import FeedbackForm from "./components/FeedbackForm"

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
    <>
    <Header /> 
    <div className="container">
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback}/>
        <FeedbackListItem  feedback={feedback} handleDelete={deleteFeedback}/>
    </div>
    </>
    )
}
export default App