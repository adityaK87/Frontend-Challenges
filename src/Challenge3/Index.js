import React from 'react';
import "./Index.css";
import logo from '../Challenge1/appleLogo.png'

const SocialMediaCard = () => {
    return (
        <div className='social-media-container'>
            <div className="profileImg">
                <img src={logo} alt="" width="50px" />
            </div>
            <div className="name">
                <h4 className="name">Aditya kumar</h4>
                <span className="userName">@adityapal87</span>
            </div>

            <div className="social-media-handles">
                <a href="">
                    <img src="" alt="twitter" className="twitter" />
                </a>
                <a href="">
                    <img src="" alt="linkedIn " className="linkedIn" />
                </a>
                <a href="">
                    <img src="" alt="github" className="github" />
                </a>
            </div>

            <div className="details">
                <div className="posts">
                    Posts
                    <div>123</div>
                </div>
                <div className="followers">
                    Followers
                    <div>13.3k</div>
                </div>
                <div className="following">
                    Following
                    <div>63</div>
                </div>
            </div>
            <div className="btn">
                <button>
                    FOLLOW
                </button>
            </div>
        </div>
    )
}

export default SocialMediaCard;