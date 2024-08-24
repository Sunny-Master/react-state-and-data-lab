// data
import { userData } from "../../data/userData"
console.log(userData)

// components
import UserCard from '../../components/UserCard/UserCard.jsx'

// css
import './Users.css'

const Users = () => {
  return (
    <>
      <h1>User List</h1>
      <div className="card-container">
        {userData.map(user => 
          <UserCard key={user.id} user={user}/>
        )}
      </div> 
    </>
  )
}

export default Users;