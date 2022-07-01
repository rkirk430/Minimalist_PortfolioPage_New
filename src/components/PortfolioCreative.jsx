import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import ReactTooltip from "react-tooltip";
import Modal from "react-modal";
import Social from "./Social";

import PersPort from "../assets/portfolio/Personal_Portfolio.jpg"

// Alt Data Site 
import AltData from "../assets/portfolio/AnotherAlt_adobe_express.jpeg";
import AltModal from "../assets/portfolio/alt_data/front_page/main/QSMain6.jpg"

//Spotify
import Spotify from "../assets/portfolio/spotify/Spotify1.jpg"
import SpotifyModal from "../assets/portfolio/spotify/Spotify1.jpg"

//Teck Resources
import TeckWriting from "../assets/portfolio/teck/Teck_Resources_Primer.pdf"
import TeckModel from "../assets/portfolio/Teck_Model_Client.xlsx"
import TeckPic from "../assets/portfolio/teck/TeckModel4.jpg"

//Iamgold
import IMG from '../assets/IMG.xlsx';
import IMGPic from '../assets/portfolio/iamgold/IMGModel10.jpg'
import IMGWriting from '../assets/portfolio/iamgold/Iamgold_Writeup.pdf'
import IMGPicModal from '../assets/portfolio/iamgold/IMGModel10.jpg'








//Placeholder Images
import Beach from "../assets/portfolio/alt_data/placeholder/beach.jpg"
import Building from "../assets/portfolio/alt_data/placeholder/building.jpg"
import City from "../assets/portfolio/alt_data/placeholder/city.jpg"
import City2 from "../assets/portfolio/alt_data/placeholder/city2.jpg"
import Palms from "../assets/portfolio/alt_data/placeholder/palms.jpg"






const data = [
  {
    id:1,
    // image: IMG1,
    title: 'Alternative Data Website',
    github: 'https://github.com/rkirk430/P4_AltData_Frontend',
    demo: 'https://main--dashing-lily-e195e6.netlify.app/'
  },
  {
    id:2,
    // image: IMG2,
    title: 'Personal Portfolio Website',
    github: 'https://github.com/rkirk430/portfolio-website',
    demo: 'https://main--dashing-lily-e195e6.netlify.app/'
  },
  {
    id:3,
    // image: IMG1,
    title: 'Spotify Mockup',
    github: 'https://github.com/rkirk430/spotify_django',
    demo: 'https://main--dashing-lily-e195e6.netlify.app/'
  },
  {
    id:4,
    title: 'Business Website',
    github: 'https://github.com/rkirk430/smarthome',
    demo: 'https://main--dashing-lily-e195e6.netlify.app/'
  }
]

const Portfolio = () => {
  // for popup video
  // const [isOpen, setOpen] = useState(false);
  // const [isOpen2, setOpen2] = useState(false);

  // for modal
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);


  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }

  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }

  function toggleModalSix() {
    setIsOpen6(!isOpen6);
  }

  function toggleModalSeven() {
    setIsOpen7(!isOpen7);
  }

  return (
    <>
      <SimpleReactLightbox>
        <div className="tokyo_tm_portfolio">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Portfolio</span>
                <h3>Creative Portfolio</h3>
              </div>
            </div>
          </div>
          {/* END TOKYO_TM_TITLE */}

          <div className="portfolio_filter">
            <Tabs>
              <TabList>
                <Tab>All</Tab>
                <Tab>Websites</Tab>
                <Tab>Financial Models</Tab>
                {/* <Tab>Reports</Tab>
                <Tab>Details</Tab> */}
              </TabList>
              {/* END TABLIST */}

              <div className="list_wrapper">
                <TabPanel>
                  <ul className="portfolio_list">


                    {/* Start: Portfolio Item 1 Details */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src={AltData}
                            alt="Details"
                            data-tip
                            data-for="detail"
                            onClick={toggleModal}
                          />

                          <ReactTooltip
                            id="detail"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>Alternative Data Site</h5>
                              <span>Details</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                    {/* End Portfolio Item 1 Details */}

                    {/* Start: Portfolio Item 2 Details */}

                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src={PersPort}
                            alt="Details"
                            data-tip
                            data-for="detail2"
                            onClick={toggleModalTwo}
                          />

                          <ReactTooltip
                            id="detail2"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>Personal Portfolio Template</h5>
                              <span>Details</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                    
                    {/* End Portfolio Item 2 Details */}

                    {/* Start: Portfolio Item 3 Details */}

                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src={Spotify}
                            alt="Details"
                            data-tip
                            data-for="detail3"
                            onClick={toggleModalThree}
                          />

                          <ReactTooltip
                            id="detail3"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>Spotify</h5>
                              <span>Details</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                    {/* End Portfolio Item 3 Details */}

                    {/* Start: Portfolio Item 4 Details */}
                    

                    {/* <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src={Building}
                            alt="Details"
                            data-tip
                            data-for="detail4"
                            onClick={toggleModalFour}
                          />

                          <ReactTooltip
                            id="detail4"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>Mambo Number 4</h5>
                              <span>Details</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li> */}

                    {/* End Portfolio Item 4 Details */}


                    {/* Start: Porfolio Item 5 Details */}

                    {/* <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src={City}
                            alt="Details"
                            data-tip
                            data-for="detail5"
                            onClick={toggleModalFive}
                          />

                          <ReactTooltip
                            id="detail5"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>Project 5</h5>
                              <span>Details</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li> */}

                    {/* End Portfolio Item 5 Details */}

                    {/* Start: Porfolio Item 6 Details */}

                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src={TeckPic}
                            alt="Details"
                            data-tip
                            data-for="detail6"
                            onClick={toggleModalSix}
                          />

                          <ReactTooltip
                            id="detail6"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>Teck Resources Financial Model</h5>
                              <span>Details</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                    {/* End Portfolio Item 6 Details */}

                    {/* Start: Porfolio Item 7 Details */}

                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src={IMGPic}
                            alt="Details"
                            data-tip
                            data-for="detail7"
                            onClick={toggleModalSeven}
                          />

                          <ReactTooltip
                            id="detail7"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>Iamgold Financial Model</h5>
                              <span>Details</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                    {/* End Portfolio Item 7 Details */}

                  </ul>
                  {/* END PORTFOLIO LIST */}
                </TabPanel>
                {/* END ALL PORTFOLIO GALLERY */}





                <TabPanel>
                  <ul className="portfolio_list">
                    
                  {/* Start More Details 1: */}
                    <li data-aos="fade-right" data-aos-duration="1200">
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src={AltData}
                            alt="Details"
                            data-tip
                            data-for="detail"
                            onClick={toggleModal}
                          />

                          <ReactTooltip
                            id="detail"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>Alternative Data Site</h5>
                              <span>Details</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                    {/* End More Details 1 */}

          
                    {/* More Details Project 2 */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src={PersPort}
                            alt="Details"
                            data-tip
                            data-for="detail2"
                            onClick={toggleModalTwo}
                          />

                          <ReactTooltip
                            id="detail2"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>Personal Portfolio Template</h5>
                              <span>Details</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                    {/* End Details Project 2 */}

                    {/* More Details Project 3 */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src={Spotify}
                            alt="Details"
                            data-tip
                            data-for="detail3"
                            onClick={toggleModalThree}
                          />

                          <ReactTooltip
                            id="detail3"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>Spotify</h5>
                              <span>Details</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                    {/* End Details Project 3 */}

                    {/* More Details Project 4 */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/7.jpg"
                            alt="Details"
                            data-tip
                            data-for="detail4"
                            onClick={toggleModalFour}
                          />

                          <ReactTooltip
                            id="detail4"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>Project 4</h5>
                              <span>Details</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                    {/* End Details Project 4 */}

                    {/* More Details Project 5 */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/7.jpg"
                            alt="Details"
                            data-tip
                            data-for="detail5"
                            onClick={toggleModalFive}
                          />

                          <ReactTooltip
                            id="detail5"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>Project 5</h5>
                              <span>Details</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                  </ul>
                    {/* End Details Project 5 */}
                </TabPanel>


{/* ================================================================================================================ */}
                            {/* Start of Financial Models Tab  */}
{/* ================================================================================================================ */}

                <TabPanel>

                    {/* More Details Project 6 */}
                  <ul className="portfolio_list">
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src={TeckPic}
                            alt="Details"
                            data-tip
                            data-for="detail6"
                            onClick={toggleModalSix}
                          />

                          <ReactTooltip
                            id="detail6"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>Teck Resources Financial Model</h5>
                              <span>Details</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                    {/* End Details Project 6 */}

                    {/* More Details Project 7 */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src={IMGPic}
                            alt="Details"
                            data-tip
                            data-for="detail7"
                            onClick={toggleModalSeven}
                          />

                          <ReactTooltip
                            id="detail7"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>Iamgold Financial Model</h5>
                              <span>Details</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                    {/* End Details Project 7 */}
                  </ul>
                  {/* END DETAILS GALLERY */}
                </TabPanel>
{/* ================================================================================================================ */}
                            {/* End of Financial Models Tab  */}
{/* ================================================================================================================ */}
                {/* END CREATIVE PORTFOLIO GALLERY */}
              </div>
              {/* END LIST WRAPPER */}
            </Tabs>
          </div>
        </div>
      </SimpleReactLightbox>


{/* ------------------PORTFOLIO DETAILS---------------------------------------------------- */}

      {/* START MODAL FOR PORTFOLIO DETAILS 1 */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    // backgroundImage: "url(assets/img/portfolio/QuantstampFP-2.jpg)",
                    backgroundColor: "lightgray",
                  }}>
                    <img src={AltModal} alt="Data" />

                  
                </div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Alternative Data Site</h3>
                <span>Project Overview</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                  Quantstamp is an alternative Data site that leverages various available API databases to display alternative financial data. Data will render and update from the template automatically and will leverage graphing options to display changes on the site.
                  </p>
                  <p>
                  Quantstamp leverages data from various third party sites to display real-time alternative trade data.
                  </p>
                  <a href= {data[0].github} className='btn' target = '_blank'> Github </a>
                  <br></br>
                  <a href= {data[0].demo} className='btn' target = '_blank'> Live Demo </a>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Languages</span>
                      <span>React, Heroku, MongoDB, JS, Bootstrap, CSS</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>Websites</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>June 17, 2022</span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      <Social />
                      {/* END SOCIAL SHARE */}
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

{/* ----------------End of Details 1------------------------- */}



      {/* START MODAL FOR PORTFOLIO DETAILS 2 */}
      <Modal
        isOpen={isOpen2}
        onRequestClose={toggleModalTwo}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalTwo}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundColor: "lightgray",
                  }}>
                    <img src={PersPort} alt="React Portfolio" />
                  </div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Personal Portfolio Template</h3>
                <span>Project Overview</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    Personal portfolio website that leverages React JS. The website is mobile friendly, includes a sliding navigation bar and working contact form. In addition the form also gives the option for the user to add potential services they can provide to clients as well as a breakdown of their individual coding language skills. This represents a template to be used and refactored for a user’s needs.
                  </p>
                  <p>
                    The code format can easily be refactored and the live demo is deployed to Netlify.
                  </p>
                  <a href= {data[1].github} className='btn' target = '_blank'> Github </a>
                  <br></br>
                  <a href= {data[1].demo} className='btn' target = '_blank'> Live Demo </a>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Languages</span>
                      <span>React, Javascript, Bootstrap, CSS</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>Websites</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>June 17, 2022</span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      <Social />
                      {/* END SOCIAL SHARE */}
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

{/* ----------------End of Details 2------------------------- */}

      {/* START MODAL FOR PORTFOLIO DETAILS 3 */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalThree}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundColor: "lightgray",
                  }}>
                    <img src={SpotifyModal} alt="spotify" />
                </div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Spotify</h3>
                <span>Project Overview</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    This code was used to duplicate the homepage of Spotify leveraging Django and Python. I used SQL as our server which allowed us to leverage full CRUD functionality to add and remove artists. 
                  </p>
                  <p>
                    Spotify is currently being finalized and will have a live demo shortly.
                  </p>
                  <a href= {data[2].github} className='btn' target = '_blank'> Github </a>
                  <br></br>
                  <a href= {data[2].demo} className='btn' target = '_blank'> Live Demo </a>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Languages</span>
                      <span>Python, Django, MySQL, CSS</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>Websites</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>June 17, 2022</span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      <Social />
                      {/* END SOCIAL SHARE */}
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

{/* ----------------End of Details 3------------------------- */}

      {/* START MODAL FOR PORTFOLIO DETAILS 4 */}
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/6.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Project 4</h3>
                <span>Project Overview</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    Blahblahblah
                  </p>
                  <p>
                  wassupaaaa
                  </p>
                  <a href= {data[0].github} className='btn' target = '_blank'> Github </a>
                  <br></br>
                  <a href= {data[0].demo} className='btn' target = '_blank'> Live Demo </a>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Languages</span>
                      <span>React, Heroku, MongoDB, JS, Bootstrap, CSS</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>Websites</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>June 17, 2022</span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      <Social />
                      {/* END SOCIAL SHARE */}
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

{/* ----------------End of Details 4------------------------- */}

      {/* START MODAL FOR PORTFOLIO DETAILS 5 */}
      <Modal
        isOpen={isOpen5}
        onRequestClose={toggleModalFive}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFive}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/6.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Project 5</h3>
                <span>Project Overview</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    Blahblahblah
                  </p>
                  <p>
                  wassupaaaa
                  </p>
                  <a href= {data[0].github} className='btn' target = '_blank'> Github </a>
                  <br></br>
                  <a href= {data[0].demo} className='btn' target = '_blank'> Live Demo </a>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Languages</span>
                      <span>React, Heroku, MongoDB, JS, Bootstrap, CSS</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>Websites</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>June 17, 2022</span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      <Social />
                      {/* END SOCIAL SHARE */}
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

{/* ----------------End of Details 5------------------------- */}



{/* =========================================================================================== */}
{/* ----------------START OF FINANCIAL MODEL MODALS-------------------------------------------- */}
{/* =========================================================================================== */}



      {/* START MODAL FOR PORTFOLIO DETAILS 6 */}
      <Modal
        isOpen={isOpen6}
        onRequestClose={toggleModalSix}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalSix}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundColor: "lightgray",
                  }}>
                    <img src={TeckPic} alt="teck" />
                  </div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Teck Resources Financial Model</h3>
                <span>Project Overview</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    Represents a fully functional three-statement financial model for a diversified metals producer, Teck Resources. The model provides a segment and asset level breakdown and forecasts mine specific metrics such as grade and recovery rates to forecast revenue and Ebitda on a per asset basis. Links to the model and subsequent research reports are below.
                  </p>
                  <a href= {TeckModel} className='btn' target = '_blank'> Excel Model </a>
                  <br></br>
                  <a href={TeckWriting} className='btn' target='_blank'> Writing Sample </a>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Languages</span>
                      <span>Excel</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>Financial Models</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>June 17, 2022</span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      <Social />
                      {/* END SOCIAL SHARE */}
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

{/* ----------------End of Details 6------------------------- */}





      {/* START MODAL FOR PORTFOLIO DETAILS 7*/}
      <Modal
        isOpen={isOpen7}
        onRequestClose={toggleModalSeven}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalSeven}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundColor: "lightgray",
                  }}>
                    <img src={IMGPicModal} alt="IMG" />
                  </div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Iamgold Financial Model</h3>
                <span>Project Overview</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    Represents a fully functional three-statement financial model and blended valuation methodology for a mid-tier gold mining company. The model incorporates a DCF on a per asset basis and incorporates projects likely to be implemented into its cashflow valuation. In addition the model also incorporates a multiples valuation approach, weighting each approach 50% to arrive at an expected price target. Links to the model and subsequent research reports are below. 
                  </p>
                  <a href= {IMG} className='btn' target = '_blank'> Excel Model </a>
                  <br></br>
                  <a href={IMGWriting} className='btn' target = '_blank'> Writing Sample </a>
                  {/* <a href= {data[1].demo} className='btn' target = '_blank'> Live Demo </a> */}
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Languages</span>
                      <span>Excel</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>Financial Models</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>June 17, 2022</span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      <Social />
                      {/* END SOCIAL SHARE */}
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}
    </>
  );
};

export default Portfolio;
