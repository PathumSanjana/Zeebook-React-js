import React from 'react'
import "./leftPane.css"
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkIcon from '@mui/icons-material/Work';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function LeftPane() {
  return (
    <div className='leftPaneBox'>
     <div className="leftPaneContainer">
      <div className="leftPaneMenu">
        <li className="leftPaneMenuItem">
              <MarkChatUnreadIcon className='leftPaneMenuIcon'/>
              <span className="leftPaneMenuText">Messages</span>
        </li>
        <li className="leftPaneMenuItem">
              <GroupIcon className='leftPaneMenuIcon'/>
              <span className="leftPaneMenuText">Groups</span>
        </li>
        <li className="leftPaneMenuItem">
              <RssFeedIcon className='leftPaneMenuIcon'/>
              <span className="leftPaneMenuText">Feed</span>
        </li>
        <li className="leftPaneMenuItem">
              <AssistantPhotoIcon className='leftPaneMenuIcon'/>
              <span className="leftPaneMenuText">Pages</span>
        </li>
        <li className="leftPaneMenuItem">
              <CalendarMonthIcon className='leftPaneMenuIcon'/>
              <span className="leftPaneMenuText">Events</span>
        </li>
        <li className="leftPaneMenuItem">
              <SettingsIcon className='leftPaneMenuIcon'/>
              <span className="leftPaneMenuText">Settings</span>
        </li>
        <li className="leftPaneMenuItem">
              <SportsEsportsIcon className='leftPaneMenuIcon'/>
              <span className="leftPaneMenuText">Games</span>
        </li>
        <li className="leftPaneMenuItem">
              <NewspaperIcon className='leftPaneMenuIcon'/>
              <span className="leftPaneMenuText">News</span>
        </li>
        <li className="leftPaneMenuItem">
              <WorkIcon className='leftPaneMenuIcon'/>
              <span className="leftPaneMenuText">Jobs</span>
        </li>
        <li className="leftPaneMenuItem">
              <AddShoppingCartIcon className='leftPaneMenuIcon'/>
              <span className="leftPaneMenuText">Market</span>
        </li>
        <hr/>
        <div className="pagesYouLiked">
          <h3>Pages You liked</h3>
        </div>
        
        <div className="pageList">
          <div className="pageListItem">
          <img src="/images/1.jpeg" alt="" className="pagePic" />
          <span className="pageName">Code with coders</span>
        </div>
        <div className="pageListItem">
          <img src="/images/1.jpeg" alt="" className="pagePic" />
          <span className="pageName">Code with coders</span>
        </div>
        <div className="pageListItem">
          <img src="/images/1.jpeg" alt="" className="pagePic" />
          <span className="pageName">Code with coders</span>
        </div>
        <div className="pageListItem">
          <img src="/images/1.jpeg" alt="" className="pagePic" />
          <span className="pageName">Code with coders</span>
        </div>
        <div className="pageListItem">
          <img src="/images/1.jpeg" alt="" className="pagePic" />
          <span className="pageName">Code with coders</span>
        </div>
        <div className="pageListItem">
          <img src="/images/1.jpeg" alt="" className="pagePic" />
          <span className="pageName">Code with coders</span>
        </div>
        <div className="pageListItem">
          <img src="/images/1.jpeg" alt="" className="pagePic" />
          <span className="pageName">Code with coders</span>
        </div>
        <div className="pageListItem">
          <img src="/images/1.jpeg" alt="" className="pagePic" />
          <span className="pageName">Code with coders</span>
        </div>
        
       </div>
      </div>
     </div>
    </div>
  )
}
