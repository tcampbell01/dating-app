import React, { useState} from 'react'
import DatingCard from 'react-tinder-card'
import './DatingCards.css'

const DatingCards = () => {
    const [people, setPeople] = useState([
        { name: "Random Guy", imgUrl: "https://unsplash.com/photos/DItYlc26zVI"},
        { name: "Another Guy", imgUrl: "https://unsplash.com/photos/p0B7ueoZz8E"},
        { name: "Random Girl", imgUrl: "https://unsplash.com/photos/Zz5LQe-VSMY"},
        { name: "Another Girl", imgUrl: "https://unsplash.com/photos/vYpbBtkDhNE"}
    ])

    const swiped = (direction, nameToDelete) => {
        console.log("receiving " + nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name + "left the screen!!")
    }

    return (
        <div className = "datingCards">
            <div className = "datingCards_container">
                {people.map((person) => (
                    <DatingCard
                    className ="swipe"
                    key={person.name}
                    preventSwipe={['up', 'down']}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen = {() => outOfFrame(person.name)} >
                    <div style={{ backgroundImage: `url(${person.imgUrl})`}} className = "card">
                    <h3>{person.name}</h3>
                
            </div>
            </DatingCard>
                ))}

        </div>
        </div>
    )
}

export default DatingCards