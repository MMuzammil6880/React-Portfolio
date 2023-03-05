import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import IMG1 from "../../img/portfolio1.jpeg";
import IMG2 from "../../img/portfolio2.png";
import IMG3 from "../../img/portfolio3.jpeg";
import IMG4 from "../../img/portfolio4.jpg";
import IMG5 from "../../img/portfolio5.jpeg";
import IMG6 from "../../img/portfolio6.jpeg";
import IMG7 from "../../img/portfolio7.png";
import IMG8 from "../../img/portfolio8.jpeg";


import { themeContext } from "../../Context";

const Portfolio = () => {
  const data = [
    {
    id: 1,
    image: IMG1,
    title: 'React Portfolio',
    github: 'https://github.com/MMuzammil6880/Portfolio',
    demo: 'https://mmds-portfolio.netlify.app/'
    },
    {
    id: 2,
    image: IMG2,
    title: 'Chat GPT info Website',
    github: 'https://github.com/MMuzammil6880/GPT3_WEBSITE',
    demo: 'https://chatgptinfo-mmds.netlify.app/'
    
    },
    {
    id: 3,
    image: IMG3,
    title: 'NetFlix Clone',
    github: 'https://github.com/MMuzammil6880/NetFlix-Clone',
    demo: 'https://mmds-netflix-clone.netlify.app/'
    },
    {
    id: 4,
    image: IMG4,
    title: 'Fighting Game',
    github: 'https://github.com/MMuzammil6880/Fighting-Game',
    demo: 'https://mmds-fighting-game.netlify.app/'
    },
    {
    id: 5,
    image: IMG5,
    title: 'Rock Paper Scissors Game',
    github: 'https://github.com/MMuzammil6880/Rock-Paper-Scissor-Game',
    demo: 'https://mmds-rps-game.netlify.app/'
    },
    {
    id: 6,
    image: IMG6,
    title: 'Intelligent Calculator',
    github: 'https://github.com/MMuzammil6880/Intelligent-Calculator',
    demo: 'https://mmds-icalculator.netlify.app/'
    },
    {
    id: 7,
    image: IMG7,
    title: 'Web Intro Card',
    github: 'https://github.com/MMuzammil6880/WebInfoCard',
    demo: 'https://mmds-webinfocard.netlify.app/'
    }
    ,
    {
    id: 8,
    image: IMG8,
    title: 'Search Bar Or Filter By JS',
    github: 'https://github.com/MMuzammil6880/Search-Bar-Or-Filter-By-JavaScript',
    demo: 'https://mmds-estore.netlify.app/'
    }
    
    ]
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      
      <span  style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider swiper-container"
      >
      
        <SwiperSlide>
          <img src={IMG1} alt="" />
          <h3> React Portfolio </h3>
          <div className='portfolio_items-cta'>
          <a href="https://github.com/MMuzammil6880/Portfolio" className='button btn' target='_blank'> Github</a>
          <a href="https://mmds-portfolio.netlify.app/" className='button btn' target='_blank'>Live Demo</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMG2} alt="" />
          <h3>Chat GPT info Website</h3>
          <div className='portfolio_items-cta'>
          <a href="https://github.com/MMuzammil6880/GPT3_WEBSITE" className='button btn' target='_blank'> Github</a>
          <a href="https://chatgptinfo-mmds.netlify.app/" className='button btn' target='_blank'>Live Demo</a>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMG3} alt="" />
          <h3>NetFlix Clone</h3>
          <div className='portfolio_items-cta'>
          <a href="https://github.com/MMuzammil6880/NetFlix-Clone" className='button btn' target='_blank'> Github</a>
          <a href="https://mmds-netflix-clone.netlify.app/" className='button btn' target='_blank'>Live Demo</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMG4} alt="" />
          <h3>Fighting Game</h3>
          <div className='portfolio_items-cta'>
          <a href="https://github.com/MMuzammil6880/Fighting-Game" className='button btn' target='_blank'> Github</a>
          <a href="https://mmds-fighting-game.netlify.app/" className='button btn' target='_blank'>Live Demo</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMG5} alt="" />
          <h3>Rock Paper Scissors Game</h3>
          <div className='portfolio_items-cta'>
          <a href="https://github.com/MMuzammil6880/Rock-Paper-Scissor-Game" className='button btn' target='_blank'> Github</a>
          <a href="https://mmds-rps-game.netlify.app/" className='button btn' target='_blank'>Live Demo</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMG6} alt="" />
          <h3>Intelligent Calculator</h3>
          <div className='portfolio_items-cta'>
          <a href="https://github.com/MMuzammil6880/Intelligent-Calculator" className='button btn' target='_blank'> Github</a>
          <a href="https://mmds-icalculator.netlify.app/" className='button btn' target='_blank'>Live Demo</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMG7} alt="" />
          <h3>Web Intro Card</h3>
          <div className='portfolio_items-cta'>
          <a href="https://github.com/MMuzammil6880/WebInfoCard" className='button btn' target='_blank'> Github</a>
          <a href="https://mmds-webinfocard.netlify.app/" className='button btn' target='_blank'>Live Demo</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMG8} alt="" />
          <h3>Search Bar Or Filter By JS</h3>
          <div className='portfolio_items-cta'>
          <a href="https://github.com/MMuzammil6880/Search-Bar-Or-Filter-By-JavaScript" className='button btn' target='_blank'> Github</a>
          <a href="https://mmds-estore.netlify.app/" className='button btn' target='_blank'>Live Demo</a>
          </div>
        </SwiperSlide>
     
      </Swiper>
    {/* When window screen <= 480px */}

    <div className="portfolio_mobile">
    {/* <h5>My Recent Work</h5>
      <h2>Portfolio</h2> */}

      <div className='container portfolio_container'>
        {
          data.map(({id, image , title , github , demo}) => {
            return(
            <article key={id} className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={image} alt={title} />
          </div>
          <h3> {title} </h3>
          <div className='portfolio_items-cta'>
          <a href={github} className='button' target='_blank'> Github</a>
          <a href={demo} className='button' target='_blank'>Live Demo</a>
          </div>
       
        </article>
      
            )
          })
        }

      </div>
    </div>
    </div>
  );
};

export default Portfolio;
