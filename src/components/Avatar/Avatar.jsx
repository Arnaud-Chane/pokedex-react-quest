import React from 'react'

// Need to be pasted inside App if needed
const simpsons = [
  {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png",
    firstName: "Homer",
    lastName: "Simpson"
  },
  {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    firstName: "Bart",
    lastName: "Simpson"
  },
]

const Avatar = (props) => {
  return(
    <div className="Avatar-ctn">
      <div className="profile-ctn">
        <figure>
          <img src={props.image}
               alt={props.firstName} />
          <figcaption>{props.lastName}</figcaption>
        </figure>
      </div>
    </div>
  )
}

export default Avatar