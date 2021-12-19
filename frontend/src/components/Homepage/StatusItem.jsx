const StatusItem = () => {
  return (
    <div style={{ margin: "24px 12px 24px 12px", width: "80px" }}>
      <div
        style={{
          width: "80px",
          height: "42px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          style={{ borderRadius: "50px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png"
          alt="text"
          width="48px"
          height="48px"
        />
      </div>
      <div>
        <p style={{ textAlign: "center", margin: "none" }}>Username</p>
      </div>
    </div>
  );
};

export default StatusItem;
