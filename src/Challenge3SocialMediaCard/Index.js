import React from 'react';
import "./Index.css";
import logo from '../Challenge1Form/appleLogo.png';
import linkedin from '../assets/li.png';

const SocialMediaCard = () => {
    return (
        <div className='social-media-container'>
            <div className="profileImg">
                <img src={logo} alt="" className='logo' />
            </div>
            <div className="name">
                <h4 className="name">Aditya kumar</h4>
                <span className="username">@adityapal87</span>
            </div>

            <div className="social-media-handles" >
                <a href="https://www.twitter.com/@AdityaP39828624" target="_blank" rel="noreferrer" className='twitter' >
                    <img  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/twitter.svg" alt='twitter' width="15px" />
                </a>
                <a href="https://www.linkedin.com/in/aditya-pal-526121233/" target="_blank" rel="noreferrer" className='linkedIn'>
                    <img   src={linkedin} alt="linkedin" width="15px" />
                </a>
                <a href="https://www.github.com/adityapal87" target="_blank" rel="noreferrer "  className='github' >
                    <svg width="15px" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" >
                        <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg></a>
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