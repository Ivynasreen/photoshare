import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import './Post.css';

const Post = ({username, name, caption, imageUrl}) => {
    return (
        <div className = "post">
            <div className="post-header">
                <Avatar className = "post-avatar" alt = "Irie" src="/static/images/avatar/1.jpg" />
                <h3>{username}</h3>
            </div>
            <img className = "post-image" src={imageUrl}alt="" />
            <h4 className= "post-text"><strong>{name}</strong>{caption}</h4>
        </div>
    );
};

export default Post;