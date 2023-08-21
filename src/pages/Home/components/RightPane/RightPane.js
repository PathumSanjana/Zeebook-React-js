import React from 'react'
import "./rightPane.css"

export default function RightPane() {
  return (
    <div className='rightPaneBox'>
      <div className='rightPaneContainer'>
        <div className='adContainer'>
          <span className='sponsered'>Sponsered</span>
          <img className='adImage' src='/images/ad.jpg' alt='' />
          <span className='adText'>Order Your food with Code with Pathum food delivery service.
          We can deliver your food into yur door-step within seconds. Order now..!</span>
        </div>
        <div className='birthdayContainer'>
          <img className='birthdayImage' src='/images/birthday.png' alt='' />
          <span className='birthdayText'><b>Gihantha Kavishan</b> and<b> 2 others</b> having birthday today..!</span>
        </div>
        <div className='friendList'>
            <li className='onlineFriend'>
              <div className='onlineFriendImageContainer'>
                <img className='onlineFriendImg' src='/images/friend.jpg' alt='' />
                <span className='onlineStatus'></span>
              </div>
              <span className='friendName'>Keyla Person Samson</span>
            </li>
            <li className='onlineFriend'>
              <div className='onlineFriendImageContainer'>
                <img className='onlineFriendImg' src='/images/friend.jpg' alt='' />
                <span className='onlineStatus'></span>
              </div>
              <span className='friendName'>Keyla Person Samson</span>
            </li>
            <li className='onlineFriend'>
              <div className='onlineFriendImageContainer'>
                <img className='onlineFriendImg' src='/images/friend.jpg' alt='' />
                <span className='onlineStatus'></span>
              </div>
              <span className='friendName'>Keyla Person Samson</span>
            </li>
            <li className='onlineFriend'>
              <div className='onlineFriendImageContainer'>
                <img className='onlineFriendImg' src='/images/friend.jpg' alt='' />
                <span className='onlineStatus'></span>
              </div>
              <span className='friendName'>Keyla Person Samson</span>
            </li>
        </div>  
      </div>
    </div>
  )
}

