import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const SuggestionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 288px;
  height: 320px;
  left: 1136px;
  top: 128px;
  box-sizing: border-box;
  overflow: hidden;
`;

const Button = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  /* identical to box height, or 114% */

  letter-spacing: 0.5px;

  /* Primary/After Hours */

  color: #0095f6;
`;

const FooterBox = styled.div`
  width: 288px;
  height: 60px;
  border: 1px solid black;
`;

const SuggestionBox = () => {
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
    <SuggestionDiv>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <img
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202103/photo-1511367461989-f85a21fda1_0_1200x768.jpeg?YVCV8xj2CmtZldc_tJAkykymqxE3fxNf&size=770:433"
              width="48px"
              height="48px"
              alt="img"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              margin: "auto auto auto 12px",
            }}
          >
            <p style={{ margin: "0px" }}>Killerboy</p>
            <p style={{ margin: "0px" }}>Online</p>
          </div>
        </div>
        <div>
          <Button style>Switch</Button>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p>Suggestions for you</p>
        <button style={{ background: "none", border: "0" }}>See all</button>
      </div>
      {suggest.map((data) => (
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "5px auto",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <img
                src={data.profile_pic}
                width="32px"
                height="32px"
                alt="img"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                margin: "auto auto auto 12px",
              }}
            >
              <p style={{ margin: "0px" }}>{data.user_name}</p>
              <p style={{ margin: "0px" }}>{data.status}</p>
            </div>
          </div>
          <div>
            <Button>Follow</Button>
          </div>
        </div>
      ))}

      {/* <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "5px auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png"
              width="32px"
              height="32px"
              alt="img"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              margin: "auto auto auto 12px",
            }}
          >
            <p style={{ margin: "0px" }}>Username</p>
            <p style={{ margin: "0px" }}>Suggested</p>
          </div>
        </div>
        <div>
          <Button>Follow</Button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "5px auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png"
              width="32px"
              height="32px"
              alt="img"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              margin: "auto auto auto 12px",
            }}
          >
            <p style={{ margin: "0px" }}>Username</p>
            <p style={{ margin: "0px" }}>Suggested</p>
          </div>
        </div>
        <div>
          <Button>Follow</Button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "5px auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png"
              width="32px"
              height="32px"
              alt="img"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              margin: "auto auto auto 12px",
            }}
          >
            <p style={{ margin: "0px" }}>Username</p>
            <p style={{ margin: "0px" }}>Suggested</p>
          </div>
        </div>
        <div>
          <Button>Follow</Button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "5px auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png"
              width="32px"
              height="32px"
              alt="img"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              margin: "auto auto auto 12px",
            }}
          >
            <p style={{ margin: "0px" }}>Username</p>
            <p style={{ margin: "0px" }}>Suggested</p>
          </div>
        </div>
        <div>
          <Button>Follow</Button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "5px auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png"
              width="32px"
              height="32px"
              alt="img"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              margin: "auto auto auto 12px",
            }}
          >
            <p style={{ margin: "0px" }}>Username</p>
            <p style={{ margin: "0px" }}>Suggested</p>
          </div>
        </div>
        <div>
          <Button>Follow</Button>
        </div>
      </div> */}
      <FooterBox>
        <h1>heading</h1>
      </FooterBox>
    </SuggestionDiv>
  );
};

export default SuggestionBox;
