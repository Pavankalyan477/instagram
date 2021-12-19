import React from "react";
import "./post_style.css";

export const Post=()=>{
    return(
        <div className="postmain_lay">
            <div className="post_logo">
                <div className="post_title"><img className="tit_img" src="https://github.com/sailuchandragiri/sailuchandragiri/blob/main/Project/post_title.png?raw=true"></img></div>
                <div className="post_dot"><img src="https://github.com/sailuchandragiri/sailuchandragiri/blob/main/Project/post_dots.png?raw=true"></img></div>
            </div>
            <div className="post_pro">
                <img src="https://github.com/sailuchandragiri/sailuchandragiri/blob/main/Project/Post.png?raw=true"></img>
            </div>
            <div className="like_post">
                <div className="first">
                    <div className="first11"><img src="https://github.com/sailuchandragiri/sailuchandragiri/blob/main/Project/heart.png?raw=true"></img></div>
                    <div className="first12"><img src="https://github.com/sailuchandragiri/sailuchandragiri/blob/main/Project/comm.png?raw=true"></img></div>
                    <div className="first13"><img src="https://github.com/sailuchandragiri/sailuchandragiri/blob/main/Project/Share.png?raw=true"></img></div>
                    <div className="first14"><img src="https://github.com/sailuchandragiri/sailuchandragiri/blob/main/Project/Vector.png?raw=true"></img></div>
                </div>
                <div className="second"><img src="https://github.com/sailuchandragiri/sailuchandragiri/blob/main/Project/pack.png?raw=true"></img></div>
                <div className="third"><img src="https://github.com/sailuchandragiri/sailuchandragiri/blob/main/Project/_%20DAYS%20AGO.png?raw=true"></img></div>
            </div>
            <div className="post_down_comt">
                <div className="four1"><img src="https://github.com/sailuchandragiri/sailuchandragiri/blob/main/Project/smile.png?raw=true"></img></div>
                <div className="four2"><img src="https://github.com/sailuchandragiri/sailuchandragiri/blob/main/Project/Add%20a%20comment....png?raw=true"></img></div>
                <div className="four3"><img src="https://github.com/sailuchandragiri/sailuchandragiri/blob/main/Project/Post%20word.png?raw=true"></img></div>
            </div>
        </div>
    );
}