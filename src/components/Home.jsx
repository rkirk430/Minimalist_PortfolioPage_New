import React from "react";
import Social from "./Social";
// import Headshot from "../assets/headshot_picture_bw.png"
import Headshot from "../assets/headshot_picture_lessdark.png"

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundColor: "lightgray",
              }}
            >
              <img src={Headshot} alt="d" />,
            </div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">RJ Kirk, CFA</h3>
            <p className="job">
              Software Engineer | Equity Research
            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
