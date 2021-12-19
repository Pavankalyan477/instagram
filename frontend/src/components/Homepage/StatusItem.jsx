import { axios } from "axios";
import { useState, useEffect } from "react";

const StatusItem = () => {
  return (
    <>
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
            src="data:image/jpeg;base64,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"
            alt="text"
            width="48px"
            height="48px"
          />
        </div>
        <div>
          <p style={{ textAlign: "center", margin: "none" }}>Pavan Kalyan</p>
        </div>
      </div>
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
            src="https://static.india.com/wp-content/uploads/2021/04/students-exams-schools-closed-PTI-382x246.jpg"
            alt="text"
            width="48px"
            height="48px"
          />
        </div>
        <div>
          <p style={{ textAlign: "center", margin: "none" }}>Korry Ganderson</p>
        </div>
      </div>{" "}
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
            src="https://image.shutterstock.com/image-illustration/neon-retro-brick-walls-club-260nw-1600082578.jpg"
            alt="text"
            width="48px"
            height="48px"
          />
        </div>
        <div>
          <p style={{ textAlign: "center", margin: "none" }}>John Route</p>
        </div>
      </div>
    </>
  );
};

export default StatusItem;
