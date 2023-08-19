import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <div className="postContainer">
            <div className="postTop">
                <img className="postImage" src="/images/2.jpg" alt="" />
                <span className="postUsername">Pathum Sanjana</span>
                <span className="postTime">5 mins ago</span>
            </div>
            <div className="postCenter">
                <div className="postCaption">Hey its my first post!!! I like to live with nature.</div>
                <img className="postedImage" src="/images/2.jpg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="reactionPic" src="/images/like.png" alt="" />
                    <img className="reactionPic" src="/images/heart.png" alt="" />
                    <img className="reactionPic" src="/images/haha.png" alt="" />
                    <span className="likeCount">Superman and 225 other</span>
                </div>
                <div className="postBottomRight">
                    <span className="commentCount">15 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
