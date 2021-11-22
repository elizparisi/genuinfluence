import React from 'react';
import {Link} from 'react-router-dom'
import Profile from './components/Profile'

const Profiles = (props) => {

  return (
    <div>
      {props.profiles.map(profile =>
        <div key={profile.id}>
        <Link to={`/talent/${talent.id}`}>{talent.fullname}</Link>
        </div>
      )}
    </div>
  )
}

export default Profiles
