import styled from "styled-components";

const Suggestion = () => {
  const Suggestion = styled.div`
    display: flex;
    flex-direction: row;
    // justify-content: center;
    align-items: center;
    padding: 0px 16px;
    /* background: violet; */
    width: 575px;
    height: 56px;
    left: 0px;
    flex: none;
    margin: 8px 0px;
  `;
  const FollowBtn = styled.button`
    background: #0095f6;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    display: flex;
    flex-fdirection: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
  `;
  const FollowingBtn = styled.button`
    background: #fafafa;
    color: black;
    border: none;
    border: 0.4px solid #8e8e8e;
    box-sizing: border-box;
    border-radius: 4px;
    font-size: 14px;
    display: flex;
    flex-fdirection: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
  `;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Suggestion>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png"
              alt=""
              width="48px"
              height="48px"
            />
          </div>
          <div style={{ lineHeight: "15px", margin: "auto auto auto 10px" }}>
            <div style={{ fontWeight: "500", lineHeight: "16px" }}>
              {"data.user_name"}
            </div>
            <div style={{ color: "#8E8E8E", lineHeight: "16px" }}>
              {"data.name"}
            </div>
            <div
              style={{
                color: "#8E8E8E",
                fontSize: "12px",
                lineHeight: "16px",
              }}
            >
              {"data.status"}
            </div>
          </div>
          <div></div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* <button
                style={{
                  background: "#0095F6",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontSize: "14px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "8px 16px",
                }}
              >
                Follow
              </button> */}
            <FollowBtn>Follow</FollowBtn>

            <FollowingBtn>Following</FollowingBtn>
          </div>
        </div>
      </Suggestion>
    </div>
  );
};

export default Suggestion;
