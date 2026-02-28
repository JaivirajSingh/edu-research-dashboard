import React from "react";

export default function StoryBlock({ story }) {
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
}