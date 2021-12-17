import styled from "styled-components";

const Container = styled.div`
  display: flex;
  // justify-content: center;
  align-items: center;
  padding: 8px 24px;
  box-sizing: border-box;
  margin-top: 5px;
  // border-top: 0.4px solid black;
  // border-bottom: 0.4px solid black;
`;
const DMComponent = ({ user }) => {
  return (
    <Container>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png"
        alt=""
        width="48px"
        height="48px"
      />
      <p style={{ margin: "auto auto auto 12px" }}>{user}</p>
    </Container>
  );
};

export default DMComponent;
