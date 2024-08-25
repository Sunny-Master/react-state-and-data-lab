// npm modules
import { Link } from "react-router-dom"

const ContactInfo = ({user}) => {
  return (  
    <>
      <div className="company-name">
        <h2>{user.company.name}</h2>
        <h5 className="catch-phrase">"{user.company.catchPhrase}"</h5>
      </div>
      <div className="contact-details">
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </div>
      <div className="address">
        <p>{user.address.street}</p>
        <p>{user.address.suite}</p>
        <p>{user.address.city} {user.address.zipcode}</p>
      </div>
      <Link to={user.website}><button className="website-link">Visit Website</button></Link>
    </>
  )
}

export default ContactInfo