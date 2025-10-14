import React from 'react'
import Card from '../components/shared/Card'
function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this project</h1>
            <p>This is a react project that leaves a feedback for a service or a product</p>
            <p>Version 1.0.0</p>
            <p>
                <a href="/">Go Back To Home</a>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage