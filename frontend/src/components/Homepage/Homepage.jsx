import styled from "styled-components";
import StatusItem from "./StatusItem";
import { Post } from "./Post";
import SuggestionBox from "./SuggestionBox";
import { useState, useEffect } from "react";
import axios from "axios";

const HomepageDiv = styled.div`
  display: flex;
  position: absolute;
  width: 608px;
  height: 128px;
  left: 496px;
  top: 128px;
  background: #ffffff;
  border: 0.4px solid #8e8e8e;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 0 12px;
`;

const GettingStartedHeading = styled.p`
  position: absolute;
  //   width: 100px;
  height: 16px;
  left: 496px;
  top: 288px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.5px;

  color: #000000;
`;
const GettingStartedBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 32px;

  position: absolute;
  width: 224px;
  height: 184px;
  left: 496px;
  top: 320px;
  margin: 16px 0;
  background: #ffffff;
  /* Neutral/Secrets */

  border: 0.4px solid #8e8e8e;
  border-radius: 4px;

  & .div {
    width: 288px;
    height: 232px;
    border: 1px solid #8e8e8e;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    & .inner {
      height: 181px;
      width: 224px;
      margin: 27px auto 24px auto;
      align-items: center;
      justify-content: center;
      display: flex;
      flex-direction: column;
    }
    & p {
      //styleName: Body/Body 1;
      font-family: SF Pro Display;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.5px;
      text-align: center;
    }
    & svg {
      align-items: center;
    }
    & button {
      width: 184px;
      height: 32px;
      background-color: #0095f6;
      border-radius: 4px;
      border: none;
      color: #ffffff;
      line-height: 16px;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      margin: auto;
    }
    & button:focus {
      outline: none;
    }
  }
`;
const GettingStartedBanner2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 32px;

  position: absolute;
  width: 224px;
  height: 184px;
  left: 816px;
  top: 320px;
  margin: 16px 0;
  background: #ffffff;
  /* Neutral/Secrets */

  border: 0.4px solid #8e8e8e;
  border-radius: 4px;

  & .div {
    width: 288px;
    height: 232px;
    border: 1px solid #8e8e8e;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    & .inner {
      height: 181px;
      width: 224px;
      margin: 27px auto 24px auto;
      align-items: center;
      justify-content: center;
      display: flex;
      flex-direction: column;
    }
    & p {
      //styleName: Body/Body 1;
      font-family: SF Pro Display;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.5px;
      text-align: center;
    }
    & svg {
      align-items: center;
    }
    & button {
      width: 184px;
      height: 32px;
      background-color: #0095f6;
      border-radius: 4px;
      border: none;
      color: #ffffff;
      line-height: 16px;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      margin: auto;
    }
    & button:focus {
      outline: none;
    }
  }
`;

const LearnMore = styled.p`
  position: absolute;
  //   width: 73px;
  height: 16px;
  left: 1031px;
  top: 560px;
  margin: 16px 0 0 0;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  /* identical to box height, or 114% */

  letter-spacing: 0.5px;

  /* Primary/After Hours */

  color: #0095f6;
`;

const Homepage = () => {
  const [suggest, setSuggest] = useState([]);
  console.log("suggest:", suggest);
  const [follow, setFollow] = useState(true);

  const fetchdata = async () => {
    // const data = await axios.get("http://localhost:3005/suggest/all");

    // setSuggest(data.data.item);
    const data = await axios.get("http://localhost:3005/suggest/all");

    setSuggest(data.data.item);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <HomepageDiv>
        <StatusItem />
      </HomepageDiv>

      <GettingStartedBanner>
        <div className="div">
          <div className="inner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M17.5003 19.75H17.3728C2.63531 18.9025 0.542808 6.4675 0.250308 2.6725C0.226739 2.37744 0.261624 2.08062 0.352964 1.79906C0.444304 1.5175 0.590303 1.25673 0.782596 1.03169C0.974889 0.80665 1.2097 0.621766 1.47357 0.48763C1.73743 0.353493 2.02518 0.272741 2.32031 0.250001H6.45281C6.75323 0.24971 7.04681 0.339633 7.29553 0.508122C7.54425 0.676611 7.73665 0.915903 7.84781 1.195L8.98781 4C9.09757 4.27266 9.12481 4.57156 9.06614 4.85957C9.00747 5.14758 8.86548 5.412 8.65781 5.62L7.06031 7.2325C7.30985 8.65056 7.98895 9.95775 9.00573 10.9772C10.0225 11.9967 11.3279 12.6792 12.7453 12.9325L14.3728 11.32C14.5839 11.1146 14.8508 10.9759 15.1403 10.9213C15.4297 10.8666 15.7288 10.8983 16.0003 11.0125L18.8278 12.145C19.1027 12.2597 19.3372 12.4536 19.5015 12.702C19.6658 12.9504 19.7524 13.2422 19.7503 13.54V17.5C19.7503 18.0967 19.5133 18.669 19.0913 19.091C18.6693 19.5129 18.097 19.75 17.5003 19.75ZM2.50031 1.75C2.3014 1.75 2.11063 1.82902 1.96998 1.96967C1.82933 2.11032 1.75031 2.30109 1.75031 2.5V2.56C2.09531 7 4.30781 17.5 17.4553 18.25C17.5538 18.2561 17.6526 18.2427 17.7459 18.2105C17.8393 18.1783 17.9253 18.1281 17.9992 18.0626C18.073 17.9971 18.1333 17.9176 18.1763 17.8288C18.2194 17.74 18.2446 17.6436 18.2503 17.545V13.54L15.4228 12.4075L13.2703 14.545L12.9103 14.5C6.38531 13.6825 5.50031 7.1575 5.50031 7.09L5.45531 6.73L7.58531 4.5775L6.46031 1.75H2.50031Z"
                fill="#262626"
              />
            </svg>
            <p>
              Add your phone number so you can reset your password, find friends
              and more.
            </p>
            <button>Add Phone number</button>
          </div>
        </div>
      </GettingStartedBanner>
      <GettingStartedBanner2>
        <div className="div">
          <div className="inner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M17.5003 19.75H17.3728C2.63531 18.9025 0.542808 6.4675 0.250308 2.6725C0.226739 2.37744 0.261624 2.08062 0.352964 1.79906C0.444304 1.5175 0.590303 1.25673 0.782596 1.03169C0.974889 0.80665 1.2097 0.621766 1.47357 0.48763C1.73743 0.353493 2.02518 0.272741 2.32031 0.250001H6.45281C6.75323 0.24971 7.04681 0.339633 7.29553 0.508122C7.54425 0.676611 7.73665 0.915903 7.84781 1.195L8.98781 4C9.09757 4.27266 9.12481 4.57156 9.06614 4.85957C9.00747 5.14758 8.86548 5.412 8.65781 5.62L7.06031 7.2325C7.30985 8.65056 7.98895 9.95775 9.00573 10.9772C10.0225 11.9967 11.3279 12.6792 12.7453 12.9325L14.3728 11.32C14.5839 11.1146 14.8508 10.9759 15.1403 10.9213C15.4297 10.8666 15.7288 10.8983 16.0003 11.0125L18.8278 12.145C19.1027 12.2597 19.3372 12.4536 19.5015 12.702C19.6658 12.9504 19.7524 13.2422 19.7503 13.54V17.5C19.7503 18.0967 19.5133 18.669 19.0913 19.091C18.6693 19.5129 18.097 19.75 17.5003 19.75ZM2.50031 1.75C2.3014 1.75 2.11063 1.82902 1.96998 1.96967C1.82933 2.11032 1.75031 2.30109 1.75031 2.5V2.56C2.09531 7 4.30781 17.5 17.4553 18.25C17.5538 18.2561 17.6526 18.2427 17.7459 18.2105C17.8393 18.1783 17.9253 18.1281 17.9992 18.0626C18.073 17.9971 18.1333 17.9176 18.1763 17.8288C18.2194 17.74 18.2446 17.6436 18.2503 17.545V13.54L15.4228 12.4075L13.2703 14.545L12.9103 14.5C6.38531 13.6825 5.50031 7.1575 5.50031 7.09L5.45531 6.73L7.58531 4.5775L6.46031 1.75H2.50031Z"
                fill="#262626"
              />
            </svg>
            <p>
              Add your phone number so you can reset your password, find friends
              and more.
            </p>
            <button>Add Phone number</button>
          </div>
        </div>
      </GettingStartedBanner2>
      <LearnMore>Learn More</LearnMore>

      <div style={{ position: "absolute", top: "608px", left: "496px" }}>
        <Post />
        <Post />
        <Post />
      </div>
      <SuggestionBox />
    </div>
  );
};

export default Homepage;
