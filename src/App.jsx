import React from "react"
import StoryData from "./data/storyData"
import Act1Chart from "./components/Act1Chart"
import Act2Chart from "./components/Act2Chart"

const chartRegistry = {
    act1: Act1Chart,
    act2: Act2Chart
}

export default function App() {
    const [actState, setActState] = React.useState("act1")

    const activeChart = chartRegistry[actState]

    // Scrolls through the 2 acts
    const storyEl = Object.values(StoryData).map((story) => {
        return (
            <div key={story.id} id={story.id} className="story-section">
                <span>{story.id}</span>
                <h1>{story.title}</h1>
                <p>{story.description}</p>

                <blockquote>
                    {story.quote.map((q, index) => (
                        <div key={index}>
                            <p>"{q.text}"</p>
                        </div>
                    ))}
                </blockquote>
            </div>
        )
    }) 

    // Makes changes to the charts when the user scrolls through acts using IntersectionObserver
    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActState(entry.target.id)
                }
            });
        }, {rootMargin:"-50% 0px -50% 0px"})

        const sections = document.querySelectorAll(".story-section")
        sections.forEach((section) => observer.observe(section))
        return () => observer.disconnect()
    }, [])

    return (
        <>
            <div className="master">

                {/* Left column is narrative */}
                <div className="left">
                    {storyEl}
                </div>
                
                {/* Right column is charts */}
                <div className="right">
                    <activeChart stats={StoryData[actState].stats} />
                </div>
            </div>
        </>
    )
}