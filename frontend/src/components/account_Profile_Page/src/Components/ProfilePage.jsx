import styled from "styled-components";
import "../App.css";
export const ProfilePage = () => {
  return (
    <>
      <Component>
        <div className="felx-top">
          <div>
            <img src="/Profile.png" alt="Profile" />
          </div>
          <div className="cont2">
            <div className="profileTag">
              <div>
                <p>DesignShift</p>
              </div>
              <div>
                <button className="flw">follow</button>
                <img src="setting.png" alt="" />
              </div>
            </div>
            <div className="stats">
              <p>
                <span>123</span> Post
              </p>
              <p>
                <span>123</span> Followers
              </p>
              <p>
                <span>123</span> Following
              </p>
            </div>
            <div className="detailed">
              <p>Design shift Academy</p>
              <p>
                Transforming Design Education in India 🇮🇳 <br /> Making it truly
                accessible with ZERO upfront cost.
              </p>
            </div>
          </div>
        </div>
        <P>Highlights</P>
        <div className="activity">
          <div>
            <img src="plus1.png" alt="" />
            <p>Add new</p>
          </div>
        </div>
      </Component>
      <Hr />
      <Tags>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M6.44762 1V17M1.19048 11.5524L17.1905 11.5524M11.4 1V17M1.19048 6.6L17.1905 6.6M1 1H17V17H1V1Z"
              stroke="#262626"
              stroke-width="2"
              stroke-linejoin="round"
            />
          </svg>
          <p>POSTS</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M5.75405 0H14.2459C15.8261 0 17.2638 0.644531 18.3069 1.67969C19.3516 2.71647 20 4.14714 20 5.7194V14.2822C20 15.8512 19.3516 17.2803 18.3101 18.3171L18.3069 18.3203C17.2622 19.3571 15.8245 20 14.2476 20H5.75405C4.17226 20 2.73293 19.3555 1.68986 18.3203L1.65056 18.2764C0.632062 17.2445 0 15.8317 0 14.2806V5.7194C0 4.14551 0.646799 2.71647 1.68986 1.67969C2.73293 0.642904 4.17062 0 5.75405 0ZM14.9844 5.04883L14.9959 5.06673H18.5328C18.3904 4.14225 17.9466 3.31217 17.308 2.67578C16.522 1.89453 15.438 1.40951 14.2459 1.40951H12.7935L14.9844 5.04883ZM13.3486 5.06673L11.1462 1.40951H6.3157L8.54429 5.06673H13.3486ZM6.89537 5.06673L4.74046 1.52832C3.95284 1.71712 3.24709 2.1224 2.69199 2.67578C2.05338 3.31055 1.61127 4.14225 1.46717 5.06673H6.89537ZM18.582 6.47624H1.41804V14.2822C1.41804 15.4492 1.89127 16.512 2.65597 17.29L2.69199 17.3242C3.47798 18.1055 4.56362 18.5921 5.75405 18.5921H14.2459C15.438 18.5921 16.522 18.1071 17.3064 17.3275L17.3096 17.3242C18.094 16.5446 18.582 15.4671 18.582 14.2822V6.47624ZM8.34289 8.94368L12.7362 11.7839C12.8066 11.8294 12.8705 11.888 12.9212 11.9596C13.121 12.2477 13.0473 12.6432 12.7575 12.8418L8.38218 15.4085C8.27247 15.498 8.13165 15.5518 7.97609 15.5518C7.6224 15.5518 7.33584 15.2669 7.33584 14.9154V9.46452H7.33912C7.33912 9.33919 7.37678 9.21224 7.45374 9.10156C7.65679 8.81348 8.05469 8.74349 8.34289 8.94368Z"
              fill="#8E8E8E"
            />
          </svg>
          <p>REELS</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM12 20.7188C7.18594 20.7188 3.28125 16.8141 3.28125 12C3.28125 7.18594 7.18594 3.28125 12 3.28125C16.8141 3.28125 20.7188 7.18594 20.7188 12C20.7188 16.8141 16.8141 20.7188 12 20.7188Z"
              fill="#8E8E8E"
            />
            <path
              d="M16.8609 11.6977L9.9211 6.65859C9.86544 6.61779 9.79954 6.59324 9.73075 6.58769C9.66197 6.58214 9.59299 6.5958 9.53151 6.62715C9.47002 6.6585 9.41846 6.7063 9.38255 6.76524C9.34664 6.82417 9.3278 6.89192 9.32813 6.96093V17.0391C9.32813 17.3461 9.675 17.5195 9.9211 17.3414L16.8609 12.3023C16.9089 12.2678 16.9479 12.2224 16.9748 12.1698C17.0017 12.1173 17.0157 12.0591 17.0157 12C17.0157 11.9409 17.0017 11.8827 16.9748 11.8302C16.9479 11.7776 16.9089 11.7322 16.8609 11.6977ZM10.8234 14.8383V9.16171L14.7305 12L10.8234 14.8383Z"
              fill="#8E8E8E"
            />
          </svg>
          <p>VIDEOS</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10.0008 6.27818C10.9806 6.27818 11.8689 6.66721 12.511 7.29551C13.1531 7.92382 13.5507 8.79303 13.5507 9.75177C13.5507 10.7105 13.1531 11.5781 12.511 12.208C11.8689 12.8363 10.9806 13.2254 10.0008 13.2254C9.02104 13.2254 8.13274 12.8363 7.49064 12.208C6.84854 11.5797 6.45097 10.7105 6.45097 9.75177C6.45097 8.79303 6.84854 7.92382 7.49064 7.29551C8.13274 6.66721 9.02104 6.27818 10.0008 6.27818ZM1.87141 2.34231H7.69359L9.98087 0L12.3513 2.34231H18.1286C19.1583 2.34231 20 3.16757 20 4.17352V18.1688C20 19.1764 19.1566 20 18.1286 20H1.87141C0.843384 20.0016 0 19.178 0 18.1704V4.17352C0 3.16595 0.84172 2.34231 1.87141 2.34231ZM7.69525 3.43778H1.87308C1.66681 3.43778 1.47883 3.52079 1.34243 3.65427C1.20602 3.78774 1.12118 3.97168 1.12118 4.17352V18.1688C1.12118 18.3706 1.20602 18.5546 1.34243 18.688C1.47883 18.8215 1.66681 18.9045 1.87308 18.9045H4.20195C4.34168 17.5633 4.95717 16.3604 5.87873 15.457C6.93338 14.425 8.39058 13.7869 10.0008 13.7869C11.6111 13.7869 13.0683 14.425 14.1229 15.457C15.0445 16.3588 15.66 17.5633 15.7997 18.9045H18.1302C18.3365 18.9045 18.5245 18.8215 18.6609 18.688C18.7973 18.5546 18.8838 18.3706 18.8838 18.1688V4.17352C18.8838 3.97168 18.799 3.78774 18.6609 3.65427C18.5245 3.52079 18.3365 3.43778 18.1302 3.43778H12.3513V3.43452C12.0652 3.43452 11.7774 3.32709 11.5595 3.11223L9.99418 1.56751L8.55693 3.04061C8.35232 3.28314 8.04125 3.43778 7.69525 3.43778ZM5.35307 18.9062H14.6503C14.5155 17.8742 14.0314 16.9496 13.3161 16.2497C12.4678 15.4195 11.2967 14.9068 10.0025 14.9068C8.70831 14.9068 7.53722 15.4195 6.68885 16.2497C5.97189 16.9496 5.48781 17.8742 5.35307 18.9062ZM11.819 7.97265C11.3532 7.51689 10.7111 7.23529 10.0008 7.23529C9.29053 7.23529 8.64842 7.51689 8.18265 7.97265C7.71688 8.42842 7.42909 9.05673 7.42909 9.75177C7.42909 10.4468 7.71688 11.0751 8.18265 11.5309C8.64842 11.9867 9.29053 12.2682 10.0008 12.2682C10.7111 12.2682 11.3532 11.9867 11.819 11.5309C12.2848 11.0751 12.5726 10.4468 12.5726 9.75177C12.5726 9.05673 12.2848 8.42679 11.819 7.97265Z"
              fill="#8E8E8E"
            />
          </svg>
          <p>TAGGED</p>
        </div>
      </Tags>

      <Info>
        <div className="div">
          <div className="inner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M9 0C4.038 0 0 4.038 0 9C0 13.962 4.038 18 9 18C13.962 18 18 13.962 18 9C18 4.038 13.962 0 9 0ZM9 1.5C13.1512 1.5 16.5 4.84875 16.5 9C16.5018 10.7955 15.858 12.5317 14.686 13.892C13.514 15.2522 11.892 16.1456 10.116 16.4093V11.187H12.252L12.5873 9.01725H10.116V7.83225C10.116 6.93225 10.4123 6.132 11.2545 6.132H12.6083V4.239C12.3705 4.20675 11.8673 4.137 10.9163 4.137C8.93025 4.137 7.76625 5.1855 7.76625 7.575V9.01725H5.72475V11.187H7.76625V16.3905C6.01481 16.1022 4.42293 15.2006 3.27502 13.8468C2.12711 12.4929 1.49797 10.775 1.5 9C1.5 4.84875 4.84875 1.5 9 1.5Z"
                fill="#262626"
              />
            </svg>
            <p>
              You choose which friends to follow. We will never post without
              your permission.
            </p>
            <button>Connect to Photo</button>
          </div>
        </div>
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
        <div className="div">
          <div className="inner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
            >
              <path
                d="M19.25 2.8125H16.0625L15.3031 0.684375C15.2507 0.538753 15.1545 0.412879 15.0278 0.323947C14.9011 0.235016 14.7501 0.187363 14.5953 0.1875H7.40469C7.08828 0.1875 6.80469 0.386719 6.69922 0.684375L5.9375 2.8125H2.75C1.71406 2.8125 0.875 3.65156 0.875 4.6875V15.375C0.875 16.4109 1.71406 17.25 2.75 17.25H19.25C20.2859 17.25 21.125 16.4109 21.125 15.375V4.6875C21.125 3.65156 20.2859 2.8125 19.25 2.8125ZM19.4375 15.375C19.4375 15.4781 19.3531 15.5625 19.25 15.5625H2.75C2.64688 15.5625 2.5625 15.4781 2.5625 15.375V4.6875C2.5625 4.58438 2.64688 4.5 2.75 4.5H7.12578L7.52656 3.37969L8.06328 1.875H13.9344L14.4711 3.37969L14.8719 4.5H19.25C19.3531 4.5 19.4375 4.58438 19.4375 4.6875V15.375ZM11 6C8.92813 6 7.25 7.67812 7.25 9.75C7.25 11.8219 8.92813 13.5 11 13.5C13.0719 13.5 14.75 11.8219 14.75 9.75C14.75 7.67812 13.0719 6 11 6ZM11 12C9.75781 12 8.75 10.9922 8.75 9.75C8.75 8.50781 9.75781 7.5 11 7.5C12.2422 7.5 13.25 8.50781 13.25 9.75C13.25 10.9922 12.2422 12 11 12Z"
                fill="#262626"
              />
            </svg>
            <p>Add a profile photo so your friends know it's you.</p>
            <button>Add profile Photo</button>
          </div>
        </div>
      </Info>

      <Footer>
        <div>
          <p>Meta</p>
          <p>About</p>
          <p>Blog</p>
          <p>Jobs</p>
          <p>Helps</p>
          <p>API</p>
          <p>Privacy</p>
          <p>Temrs</p>
          <p>Top Accounts</p>
          <p>Hashtags</p>
          <p>Locations</p>
          <p>Instagram lite</p>
          <p>English</p>
          <p>© 2021 Instagram from Meta</p>
        </div>
      </Footer>
    </>
  );
};

const Component = styled.div`
  /* font-family: SF Pro Display; */
  display: flex;
  max-width: 928px;
  margin: 56px auto;
  flex-direction: column;
  .felx-top {
    width: 768px;
    height: 208px;
    margin: 56px auto 96px auto;
    display: flex;
    flex-direction: row;
    img {
      width: 208px;
      height: 208px;
    }
    .cont2 {
      letter-spacing: 0.5px;
      width: 528px;
      height: 184px;
      margin: auto;
      margin-left: 32px;
      display: flex;
      flex-direction: column;
      position: static;
      left: 240px;
      top: 12px;
      align-items: flex-start;

      .profileTag {
        display: flex;
        flex-direction: row;
        height: 48px;

        & .flw {
          width: 108px;
          height: 32px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 8px 16px;
          background: #fafafa;
          margin-left: 56px;
          margin-top: 8px;
          border: 0.4px solid #8e8e8e;
          box-sizing: border-box;
          border-radius: 4px;
        }
      }
      .profileTag > div:nth-child(2) > img {
        width: 76px;
        height: 32px;
        margin: 8px 8px 8px 56px;
      }
      .profileTag > div:nth-child(3) > img {
        width: 32px;
        height: 32px;
        margin: 8px 8px 8px 0;
      }
      .profileTag > div:nth-child(4) > img {
        width: 16px;
        height: 4px;
        margin-top: 22px;
      }
      .profileTag p {
        font-size: 30px;
        font-weight: 300;
        margin: 0;
        line-height: 48px;
        letter-spacing: 0.25 px;
      }
      .stats {
        width: 394px;
        height: 24px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 8px;
        p {
          font-size: 16px;
          line-height: 24px;
          letter-spacing: 0.5px;
          margin: 0;
          font-weight: 500;
        }
      }
      .detailed {
        height: auto;
        word-wrap: wrap;
        width: 394px;
        height: 72px;
        display: flex;
        flex-direction: column;
        & p {
          margin: 0;
          font-weight: 400;
          line-height: 24px;
          size: 16px;
          word-wrap: wrap;
        }
        & p:nth-child(1) {
          font-weight: 500;
        }
        & a {
          letter-spacing: 0.25px;
        }
      }
    }
  }
  .activity {
    display: flex;
    flex-direction: row;
    width: 768px;
    height: 80px;
    margin: auto;
    & div {
      width: 83px;
      height: 80px;
      margin: 0px;
      margin-right: 32px;
      & img {
        width: 50px;
        margin: 4px 16px 4px 16px;
        height: 50px;
        border-radius: 50%;
        border: 3px solid rgb(239, 239, 239);
        padding: 5px;
      }
      & p {
        margin: 0;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 0.5px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
`;
const P = styled.p`
  font-weight: 500;
  margin-left: 90px;
`;
const Hr = styled.hr`
  color: #b3b3b3;
  width: 928px;
  margin: auto;
  margin-top: 64px;
`;

const Tags = styled.div`
display: flex;
flex;direction: row;
justify-content: space-evenly;
width: 457px;
height: 40px;
margin: auto;
margin-bottom: 28px;
& div{
    display: flex;
    flex-direction: row;
    color:#8E8E8E;
    & svg{
        margin: 11px 11px;
    }
}
& p{
   font-size: 14px;
   line-height: 16px;
   letter-spacing: 1px;
   font-weight: 500;
}
`;

const Info = styled.div`
  width: 928px;
  height: 232px;
  margin: auto;
  display: flex;
  justify-content: space-between;

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

const Footer = styled.footer`
  width: 702px;
  height: 48px;
  margin: 80px auto 72px auto;
  & div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    & p {
      margin: 8px 8px;
      letter-spacing: 1.5px;
      font-size: 10px;
      line-height: 16px;
      color: #8e8e8e;
      font-weight: 400;
    }
  }
`;
