import React from "react"
import StoryData from "./data/storyData"
import Act1Chart from "./components/Act1Chart"
import Act2Chart from "./components/Act2Chart"
import StoryBlock from "./components/StoryBlock"

const chartRegistry = {
    act1: Act1Chart,
    act2: Act2Chart
}

export default function App() {
    const [actState, setActState] = React.useState("act1")

    const ActiveChart = chartRegistry[actState]
    if (!ActiveChart) return <div className="right">Loading or Error...</div>
    
    // Scrolls through the 2 acts


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
                    {Object.values(StoryData).map((story) => (
                        <StoryBlock key={story.id} story={story} />
                    ))}
                </div>
                
                {/* Right column is charts */}
                <div className="right">
                    <ActiveChart stats={StoryData[actState].stats} />
                </div>
            </div>
        </>
    )
}