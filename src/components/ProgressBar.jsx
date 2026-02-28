import React, { useEffect } from "react";

export default function ProgressBar() {
    const [scrollPercentage, setScrollPercentage] = React.useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight
            const documentHeight = document.documentElement.scrollHeight
            const scrollY = window.scrollY

            const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100
        
            setScrollPercentage(scrollPercent)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className="progress-container">
            <div className="progress-fill" style={{width: `${scrollPercentage}%`}}></div>
        </div>
    )
}