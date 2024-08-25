
const ProfileInfo = ({user}) => {
  
  return (  
    <>
      <img class="avatar" src={user.avatar} alt="user profile pic" />
      <div className="user-name">
        <h2>{user.name}</h2>
        <h4>({user.username})</h4>
      </div>
    </>
  )
}

export default ProfileInfo