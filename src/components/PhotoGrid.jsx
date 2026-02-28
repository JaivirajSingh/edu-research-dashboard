import { useEffect, useRef } from "react"
import img1 from "../assets/1.jpeg"
import img2 from "../assets/2.jpeg"
import img3 from "../assets/3.jpeg"
import img4 from "../assets/4.jpeg"
import img5 from "../assets/5.jpeg"

const photos = [img1, img2, img3, img4, img5]

export default function PhotoGrid() {
    const gridRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible")
                    observer.unobserve(entry.target)
                }
            })
        }, { threshold: 0.2 })

        const images = gridRef.current.querySelectorAll(".photo-item")
        images.forEach(img => observer.observe(img))

        return () => observer.disconnect()
    }, [])

    return (
        <div className="photo-section">
            <h3 className="photo-heading">Field Research & Documentation</h3>
            <div className="masonry-grid" ref={gridRef}>
                {photos.map((src, index) => (
                    <img
                        key={index} 
                        src={src} 
                        alt={`Research Documentation ${index + 1}`}
                        className="photo-item"
                    />
                ))}
            </div>
        </div>
    )
}