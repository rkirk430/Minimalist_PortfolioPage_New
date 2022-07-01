import React, { useState } from "react";
import Modal from "react-modal";
// import Brand from "./Brand";
import Resume from '../assets/RK_Resume_6-22.pdf'


import City from '../assets/Clouds_City_Resized.jpg'

Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="tokyo_tm_about">
        <div className="about_image ">
          <img src={City} alt="City" />
        </div>
        {/* END ABOUT IMAGE */}
        <div className="description">
          <h3 className="name">RJ Kirk, CFA </h3>
          <div className="description_inner">
            <div className="left">
              <p>
                Hi! I come from a background of various roles within equity research and product strategy with an eagerness to learn and develop new skills. Most recently I completed General Assembly’s Software Immersion  Program to further develop my technical background and help support a transition into a role that I can leverage my prior experience with the software engineering knowledge I’ve developed.
              </p>
              <div className="tokyo_tm_button">
                <button onClick={toggleModal} className="ib-button">
                  Read More
                </button>
              </div>
              {/* END TOKYO BUTTON */}
            </div>
            {/* END LEFT */}
            <div className="right">
              <ul>
              <li>
                  <p>
                    <span>Resume:</span>
                    <a href= {Resume} target= "_blank">Click to Download</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email:</span>
                    <a href="mailto:r.kirk430@gmail.com">r.kirk430@gmail.com</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Location:</span> New Jersey | New York
                  </p>
                </li>
                {/* <li>
                  <p>
                    <span>Phone:</span>
                    <a href="tel:+16096102803">+1 609 610 2803</a>
                  </p>
                </li> */}
                <li>
                  <p>
                    <span>Linkedin:</span>
                    <a href="https://www.linkedin.com/in/robert-kirk1/">Connect Here</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Certifications:</span> CFA Charterholder, GA SEI
                  </p>
                </li>
              </ul>
              {/* END UL */}
            </div>
            {/* END RIGHT */}
          </div>
          {/* END DESCRIPTION INNER */}
        </div>
      </div>

      {/* START ABOUT POPUP BOX */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_about">
          <button className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END POPUP CLOSE BUTTON */}
          <div className="box-inner">
            <div
              className="description_wrap scrollable"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="my_box">
                <div className="left">
                  <div className="about_title">
                    <h3>Front & Backend Development</h3>
                  </div>
                  {/* END ABOUT TITLE */}
                  <div className="tokyo_progress">
                    {/* Development Experience 1 */}
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">HTML </span>
                        <span className="number">Advanced</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 100 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    {/* End of Development Experience 1 */}
                    {/* Development Experience 2 */}
                    <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">Javascript</span>
                        <span className="number">Intermediate</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 50 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    {/* End of Development Experience 2 */}

                    <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">Python</span>
                        <span className="number">Intermediate</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 50 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">MySQL</span>
                        <span className="number">Proficient</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 75 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">Node JS</span>
                        <span className="number">Intermediate</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 50 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">React</span>
                        <span className="number">Proficient</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 75 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">MongoDB</span>
                        <span className="number">Beginner</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 25 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">CSS</span>
                        <span className="number">Advanced</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 100 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  
                  {/* END PROGRESS */}

                  
                </div>
                {/* END LEFT */}

                <div className="right">
                  <div className="about_title">
                    <h3>Financial Literacy</h3>
                  </div>
                  {/* END TITLE */}
                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">Financial Modeling</span>
                        <span className="number">Advanced</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 100 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Equity Valuation</span>
                        <span className="number">Advanced</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 100 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Forecasting</span>
                        <span className="number">Advanced</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 100 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">GAAP / IFRS Accounting Methods</span>
                        <span className="number">Proficient</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 75 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Equity Product Strategy</span>
                        <span className="number">Advanced</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 100 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Commodity Forecasting</span>
                        <span className="number">Proficient</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 75 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Bloomberg / FactSet</span>
                        <span className="number">Advanced</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 100 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="85">
                      <span>
                        <span className="label">Industry Supply & Demand Modeling</span>
                        <span className="number">Proficient</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 75 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* EDN TOKYO PROGRESS */}
                </div>
                {/* END RIGHT */}
              </div>
              {/* END MYBOX */}


{/* ============= Save Prior Employer Section as Stretch Goal ================== */}

              {/* <div className="partners">
                <div className="about_title">
                  <h3>Prior Employers</h3>
                </div>
                <Brand />
              </div> */}

 {/* ==================== END of Prior Employer Section ========================= */}
      
            </div>
          </div>
        </div>
      </Modal>
      {/* END ABOUT POPUP BOX */}
    </>
  );
};

export default About;
