import React from 'react'

export default function StarRating({totalStars = 5}) {

    const [rating, setRating] = React.useState(0);
    const [hover, setHover] = React.useState(0);
  return (
    <div>
        <h1 style={{  }}>Star Rating Component</h1>
        <div >
            {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                return <span key={index} onClick={() => setRating(starValue)} 
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(0)}
                style={{color: index < (hover || rating) ? "gold" : "lightgray",
                     fontSize: "30px",  cursor: "pointer" }}>&#9733;</span>
            })}
        </div>
       <p>Rating: {rating}</p>
    </div>
  )
}
