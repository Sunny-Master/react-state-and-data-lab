// npm modules
import { useState } from 'react'
import { Link } from 'react-router-dom'

// components
import ProfileInfo from '../ProfileInfo/ProfileInfo'
import ContactInfo from '../ContactInfo/ContactInfo'

// css
import './UserCard.css'

const UserCard = ({user}) => {
  const [displayProfileInfo, setDisplayProfileInfo] = useState(true)

  const handleUserCardView = () => {
    setDisplayProfileInfo(!displayProfileInfo)
  }

  return ( 
    <div className='user-card'>
      {
        displayProfileInfo ?
          <ProfileInfo user={user}/> 
          : 
          <ContactInfo user={user}/>
      }      
      <button onClick={handleUserCardView}>
        {
          displayProfileInfo ? 
            'Show Contact Info' 
            : 
            'Hide Contact info'
        }
      </button>
    </div>
  )
}

export default UserCard