import React from 'react'
import "./addPost.css"
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function AddPost() {
  return (
    <div className='addPost'>
        <div className="addPostContainer">
            <div className="addPostTop">
                <img src="/images/1.jpeg" alt="" className="addPostPic" />
                <input placeholder='whats in your mind..?' type="text" className="addPostInput" />
            </div>
            <hr className='PostHr'/> 
            <div className="addPostBottom">
                <div className="addPostOptions">
                    <div className="addpostOption">
                        <InsertPhotoIcon htmlColor='orange' className='addPhoto'/>
                        <span className="addPostOptionText">Add Photo/Vedio</span>
                    </div>
                    <div className="addpostOption">
                        <AddLocationAltIcon htmlColor='red' className='addPhoto'/>
                        <span className="addPostOptionText">Add Location</span>
                    </div>
                    <div className="addpostOption">
                        <LocalOfferIcon htmlColor='blue' className='addPhoto'/>
                        <span className="addPostOptionText">Add Tag</span>
                    </div>
                    <div className="addpostOption">
                        <LiveTvIcon htmlColor='tomato' className='addPhoto'/>
                        <span className="addPostOptionText">Go Live</span>
                    </div>
                </div>
                <button className="PostButton">Post</button>
            </div>
        </div>
    </div>
  )
}
