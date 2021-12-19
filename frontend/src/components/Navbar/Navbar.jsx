import "./navbar.css";
// import { debounce } from "lodash";
 import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

const Navbar = () => {
  const [display, setDisplay] = useState([]);
  var timerId;

  async function get(name) {
    var res = await fetch(`http://localhost:3005/suggest/one/${name}`);
    var data = await res.json();
    // console.log(data);
    // console.log("disp:", data);
    return data.item;
  }
  async function main() {
    let name = document.querySelector(".inp").value;
    let search = await get(name);
    //  console.log("pavn:",search)

    if (search === undefined) {
      return false;
    }
    // console.log("len",search.length)
    if(search.length!==1){
      let show = document.querySelector(".hate_you");
      show.style.display="none";

    }else{
      let show = document.querySelector(".hate_you");
      show.style.display="block";
      //  console.log("seaarch:",search)
      setDisplay(search);
    }
   
  }
  console.log(display);
  // function appendsearch(m) {
  //   m.forEach(({ name, profile_pic, description }) => {
  //     let out = document.querySelector(".div22");
  //     let show = document.querySelector(".hate_you");
  //     var come = document.querySelector(".cls1");
  //     var come2 = document.querySelector(".cls2");
  //     var img = document.querySelector(".pic");

  //     // let img=document.createElement("img")

  //     img.src = profile_pic;

  //     come = name;
  //     come2 = description;
  //     if (m.length !== 0) {
  //       show.style.display = "block";
  //     } else {
  //       show.style.display = "none";
  //     }

  //     //  name=come ;

  //     // let data = {
  //     //   ...display,

  //     // };
  //     // setDisplay(data);

  //     out.append(come, come2);
  //     show.append(img, out);
  //   });
  // }
  function debounce(func, delay) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      func();
    }, delay);
  }

  return (
    <div style={{ display: "block" }}>
      <div className="navbar">
        <div className="navbar1">
          <div className="insta">
            <svg
              width="144"
              height="56"
              viewBox="0 0 144 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.41482 8.13867C4.46642 9.34681 1.22434 12.7564 0.201042 17.0449C-1.09725 22.4739 4.30039 24.7666 4.74141 24.0185C5.26033 23.1314 3.77111 22.8336 3.46701 20.0186C3.07573 16.3784 4.79955 12.3113 6.97481 10.5268C7.38057 10.2005 7.36088 10.6609 7.36088 11.5095C7.36088 13.04 7.2737 26.7329 7.2737 29.5917C7.2737 33.4615 7.1118 34.68 6.81292 35.8832C6.51917 37.1068 6.0439 37.932 6.40195 38.2532C6.8077 38.6078 8.53152 37.7633 9.53092 36.3975C10.7265 34.7613 11.1478 32.7948 11.2256 30.6607C11.3138 28.0906 11.3087 24.0043 11.3138 21.6781C11.3138 19.5389 11.3481 13.2849 11.2796 9.51968C11.2599 8.59903 8.64461 7.63456 7.41482 8.13867ZM143.349 28.4545C142.928 28.4545 142.728 28.8864 142.566 29.611C142.008 32.1384 141.42 32.7085 140.66 32.7085C139.814 32.7085 139.054 31.4576 138.854 28.9535C138.702 26.987 138.726 23.3611 138.922 19.7544C138.962 19.0156 138.755 18.2829 136.727 17.5583C135.851 17.2514 134.582 16.791 133.951 18.287C132.163 22.5034 131.468 25.8601 131.301 27.2177C131.297 27.2889 131.208 27.2991 131.193 27.1364C131.091 26.047 130.855 24.0663 130.826 19.9028C130.816 19.0979 130.645 18.4018 129.724 17.8358C129.132 17.4719 127.329 16.8195 126.677 17.5919C126.119 18.2249 125.468 19.9231 124.787 21.9373C124.238 23.5775 123.856 24.6903 123.856 24.6903C123.856 24.6903 123.86 20.2676 123.871 18.5888C123.871 17.9556 123.43 17.7453 123.298 17.7066C122.695 17.5339 121.505 17.2514 121.006 17.2514C120.384 17.2514 120.237 17.5919 120.237 18.0857C120.237 18.1477 120.134 23.9028 120.134 27.9271V28.4931C119.795 30.3448 118.68 32.8579 117.47 32.8579C116.26 32.8579 115.687 31.8071 115.687 27.0114C115.687 24.2147 115.775 22.9973 115.814 20.9729C115.838 19.8072 115.887 18.9109 115.883 18.7046C115.873 18.0857 114.77 17.7687 114.261 17.6538C113.747 17.5339 113.301 17.4953 112.949 17.5095C112.459 17.539 112.112 17.855 112.112 18.2971V18.9678C111.48 17.9902 110.455 17.3083 109.77 17.1121C107.939 16.5797 106.023 17.0542 104.578 19.0298C103.432 20.604 102.741 22.3824 102.472 24.9393C102.271 26.8102 102.335 28.7045 102.692 30.3061C102.262 32.114 101.468 32.8579 100.601 32.8579C99.3372 32.8579 98.4271 30.8427 98.5299 27.3559C98.6036 25.0643 99.0685 23.4576 99.5822 21.1263C99.8033 20.1334 99.6217 19.6162 99.1764 19.1121C98.7696 18.6609 97.8979 18.4261 96.6494 18.7087C95.7621 18.915 94.4845 19.1355 93.3232 19.3042C93.3232 19.3042 93.3917 19.0298 93.4508 18.5461C93.7497 16.0085 90.9332 16.2148 90.0365 17.0258C89.4979 17.5095 89.1305 18.0806 88.9935 19.1071C88.7735 20.7382 90.1299 21.5054 90.1299 21.5054C89.6847 23.5003 88.597 26.109 87.4658 27.9942C86.8628 29.0064 86.402 29.7503 85.8054 30.546C85.7999 30.2533 85.7999 29.9555 85.7999 29.6638C85.7896 25.4668 85.8435 22.1629 85.8684 20.9729C85.8933 19.8072 85.9421 18.9343 85.9421 18.728C85.9318 18.2768 85.6629 18.0999 85.0942 17.8886C84.595 17.6975 84.0025 17.5583 83.3901 17.5095C82.6211 17.4526 82.151 17.855 82.1656 18.3296V18.9678C81.5293 17.9902 80.505 17.3083 79.8294 17.1121C77.9925 16.5797 76.0778 17.0542 74.6331 19.0298C73.4916 20.604 72.7371 22.8052 72.5212 24.9149C72.3261 26.8915 72.3603 28.5602 72.6343 29.9708C72.3406 31.3803 71.5031 32.8579 70.5535 32.8579C69.3434 32.8579 68.6523 31.8071 68.6523 27.0114C68.6523 24.2147 68.7405 22.9973 68.7851 20.9729C68.809 19.8072 68.8536 18.9109 68.8484 18.7046C68.8432 18.0857 67.7421 17.7687 67.2274 17.6538C66.6939 17.5298 66.228 17.4912 65.8751 17.5095C65.405 17.5481 65.0771 17.9556 65.0771 18.2676V18.9678C64.4409 17.9902 63.4166 17.3083 62.7358 17.1121C60.9041 16.5797 59.0038 17.0644 57.5488 19.0298C56.5992 20.3113 55.8302 21.7351 55.4338 24.8916C55.3259 25.8031 55.2719 26.6558 55.277 27.4525C54.8993 29.7157 53.2295 32.3254 51.8679 32.3254C51.0646 32.3254 50.3008 30.8092 50.3008 27.5724C50.3008 23.2656 50.5748 17.1264 50.6236 16.5319C50.6236 16.5319 52.3473 16.5024 52.6857 16.4983C53.5429 16.4932 54.3264 16.5126 55.4681 16.4547C56.0461 16.4262 56.5992 14.4069 56.0015 14.1529C55.7368 14.042 53.8366 13.9414 53.0821 13.9273C52.4459 13.913 50.6869 13.784 50.6869 13.784C50.6869 13.784 50.8446 9.71182 50.8789 9.285C50.9079 8.92014 50.4378 8.73828 50.1638 8.62746C49.5017 8.35002 48.9091 8.21999 48.2138 8.08074C47.2393 7.88463 46.8034 8.0767 46.7204 8.87647C46.5927 10.0909 46.5242 13.6498 46.5242 13.6498C45.8092 13.6498 43.3849 13.5096 42.674 13.5096C42.0139 13.5096 41.2978 16.292 42.2143 16.3256C43.2676 16.3642 45.0942 16.4028 46.3084 16.4353C46.3084 16.4353 46.2544 22.6761 46.2544 24.5989V25.1934C45.584 28.6029 43.2375 30.4454 43.2375 30.4454C43.7419 28.1863 42.7134 26.4931 40.8526 25.0643C40.1667 24.5318 38.8154 23.5288 37.3013 22.4404C37.3013 22.4404 38.1782 21.5918 38.9565 19.8937C39.5056 18.6894 39.5305 17.3042 38.1782 17.0014C35.9449 16.4983 34.108 18.105 33.5548 19.8215C33.1335 21.1456 33.3545 22.1334 34.191 23.1548L34.3819 23.3855C33.8828 24.3346 33.1874 25.6151 32.6042 26.608C30.9738 29.3661 29.744 31.5439 28.8183 31.5439C28.0742 31.5439 28.0835 29.3326 28.0835 27.2604C28.0835 25.4759 28.2205 22.7859 28.3285 20.0044C28.3627 19.0877 27.8926 18.5603 27.1049 18.0857C26.6243 17.7981 25.6052 17.2321 25.0127 17.2321C24.1316 17.2321 21.5744 17.3469 19.1605 24.1812C18.8564 25.045 18.2586 26.6131 18.2586 26.6131L18.3126 18.3926C18.3126 18.2005 18.2099 18.0187 17.9701 17.8886C17.5633 17.6731 16.4715 17.2321 15.5115 17.2321C15.0456 17.2321 14.8152 17.4435 14.8152 17.8601L14.7373 30.7137C14.7373 31.6923 14.7612 32.8335 14.8598 33.3325C14.9574 33.8315 15.1193 34.239 15.3154 34.4829C15.5116 34.7187 15.7409 34.9006 16.1135 34.9819C16.4611 35.054 18.3759 35.2888 18.4745 34.5744C18.5969 33.7156 18.6011 32.7909 19.6057 29.3234C21.1727 23.9322 23.211 21.3042 24.171 20.3682C24.3422 20.2056 24.5332 20.1955 24.5228 20.4648C24.4792 21.6487 24.3371 24.5989 24.2395 27.107C23.98 33.8264 25.2233 35.0683 27.0115 35.0683C28.3731 35.0683 30.293 33.74 32.3551 30.3833C33.643 28.2869 34.8873 26.2391 35.7882 24.7574C36.4057 25.3224 37.1103 25.9322 37.8108 26.5846C39.4422 28.0948 39.9757 29.5338 39.6187 30.8966C39.3488 31.9412 38.3256 33.0155 36.5084 31.9707C35.9791 31.6679 35.7539 31.4332 35.2205 31.0876C34.9361 30.9006 34.495 30.8478 34.2356 31.0399C33.5496 31.5439 33.1625 32.1811 32.9373 32.9728C32.7266 33.7451 33.5154 34.1476 34.3331 34.5022C35.0336 34.8142 36.5426 35.0876 37.5068 35.1211C41.2636 35.2461 44.2711 33.3467 46.3623 28.4545C46.7401 32.6801 48.331 35.0734 51.0989 35.0734C52.9544 35.0734 54.8111 32.7278 55.6247 30.421C55.8541 31.361 56.2017 32.176 56.648 32.8722C58.7838 36.1811 62.9267 35.4717 65.0033 32.6608C65.6499 31.7878 65.7485 31.4759 65.7485 31.4759C66.0515 34.1293 68.2361 35.0632 69.4856 35.0632C70.8908 35.0632 72.3313 34.4118 73.3442 32.176C73.4667 32.421 73.5943 32.6516 73.7417 32.8722C75.8723 36.1811 80.0152 35.4717 82.0971 32.6608C82.1905 32.5216 82.2787 32.4067 82.3513 32.296L82.4156 34.0418C82.4156 34.0418 81.2253 35.1069 80.4958 35.7634C77.2879 38.6465 74.848 40.8335 74.6674 43.3751C74.4422 46.622 77.126 47.8263 79.1632 47.9838C81.3187 48.1525 83.1702 46.9868 84.3055 45.3466C85.3049 43.9076 85.9618 40.8142 85.9131 37.7542C85.8934 36.5266 85.8633 34.9728 85.8342 33.299C86.9654 32.0236 88.2388 30.4016 89.4052 28.5033C90.6828 26.4403 92.0444 23.6629 92.7397 21.5003C92.7397 21.5003 93.9301 21.5105 95.1942 21.4333C95.6009 21.4089 95.7182 21.4912 95.6394 21.7788C95.5511 22.1284 94.0432 27.8315 95.4193 31.6303C96.3648 34.2289 98.485 35.0683 99.7491 35.0683C101.223 35.0683 102.634 33.9748 103.388 32.3539C103.481 32.5317 103.574 32.7085 103.682 32.8722C105.813 36.1811 109.941 35.4667 112.038 32.6608C112.513 32.0236 112.778 31.4759 112.778 31.4759C113.228 34.2248 115.413 35.0734 116.661 35.0734C117.969 35.0734 119.203 34.551 120.207 32.2289C120.247 33.2512 120.31 34.0856 120.418 34.3488C120.481 34.5124 120.854 34.7136 121.118 34.8142C122.313 35.2461 123.528 35.0398 123.973 34.9484C124.287 34.8863 124.532 34.6466 124.562 34.0134C124.649 32.3539 124.595 29.5673 125.11 27.4911C125.976 24.0186 126.78 22.6711 127.162 22.0044C127.373 21.6294 127.617 21.5674 127.622 21.9607C127.637 22.7615 127.682 25.1121 128.019 28.2777C128.26 30.5988 128.588 31.9748 128.842 32.4118C129.557 33.6537 130.448 33.7116 131.169 33.7116C131.629 33.7116 132.589 33.5866 132.505 32.7949C132.462 32.4118 132.535 30.0277 133.382 26.604C133.941 24.3641 134.866 22.3449 135.199 21.606C135.327 21.3327 135.381 21.544 135.381 21.5867C135.307 23.1263 135.151 28.1669 135.787 30.9199C136.66 34.6567 139.171 35.0734 140.048 35.0734C141.914 35.0734 143.448 33.6821 143.962 30.0186C144.089 29.1354 143.903 28.4545 143.349 28.4545ZM65.0376 26.1912C64.9348 28.1283 64.5477 29.7502 63.9312 30.9249C62.8042 33.0591 60.5864 33.7308 59.6109 30.6567C58.9011 28.4362 59.1408 25.4047 59.4397 23.7685C59.8703 21.3417 60.9632 19.6253 62.6672 19.7828C64.4107 19.9515 65.2628 22.1527 65.0376 26.1912ZM82.1263 26.2197C82.0286 28.0469 81.544 29.8884 81.0148 30.9249C79.923 33.0733 77.6398 33.745 76.6944 30.6567C76.0489 28.5408 76.2003 25.8122 76.5231 24.0948C76.9403 21.86 77.9438 19.7828 79.7517 19.7828C81.5098 19.7828 82.3763 21.673 82.1263 26.2197ZM82.5725 38.7084C82.5476 42.0519 82.0142 44.9776 80.8673 45.8313C79.2318 47.0396 77.0327 46.1281 77.4883 43.6921C77.8899 41.5336 79.7953 39.3324 82.5777 36.6414C82.5777 36.6414 82.5873 37.2551 82.5725 38.7084ZM112.077 26.239C111.979 28.2491 111.523 29.8173 110.961 30.9249C109.868 33.0733 107.605 33.7399 106.64 30.6567C106.116 28.9728 106.091 26.1618 106.469 23.8173C106.851 21.4281 107.924 19.6253 109.697 19.7828C111.449 19.9464 112.268 22.1527 112.077 26.239Z"
                fill="#231E1F"
              />
            </svg>
          </div>
          <div className="navbar2">
            <div className="search">
              <svg
                className="sericon"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66659 12C7.8499 11.9998 8.99912 11.6037 9.93125 10.8747L12.8619 13.8054L13.8046 12.8627L10.8739 9.93204C11.6033 8.99982 11.9996 7.85033 11.9999 6.66671C11.9999 3.72604 9.60725 1.33337 6.66659 1.33337C3.72592 1.33337 1.33325 3.72604 1.33325 6.66671C1.33325 9.60737 3.72592 12 6.66659 12ZM6.66659 2.66671C8.87259 2.66671 10.6666 4.46071 10.6666 6.66671C10.6666 8.87271 8.87259 10.6667 6.66659 10.6667C4.46059 10.6667 2.66659 8.87271 2.66659 6.66671C2.66659 4.46071 4.46059 2.66671 6.66659 2.66671Z"
                  fill="#8E8E8E"
                />
              </svg>

              <input
                className="inp"
                onChange={() => debounce(main, 1000)}
                type="text"
                name="search"
                placeholder="Search"
              />
            </div>
            <div className="icons">
              <div className="home">
                <Link className="link" to="/Homepage">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.293 10.707L11.293 3.707C11.4805 3.51953 11.7348 3.41422 12 3.41422C12.2652 3.41422 12.5195 3.51953 12.707 3.707L19.707 10.707C19.8946 10.8945 19.9999 11.1488 20 11.414V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H14V15H10V22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V11.414C4.00006 11.1488 4.10545 10.8945 4.293 10.707V10.707Z"
                      stroke="#262626"
                      stroke-width="1.6"
                    />
                  </svg>
                </Link>
              </div>
              <div className="msg">
                <Link className="link" to="/chat">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 3C7.0575 3 3 6.85275 3 11.625C3 14.1675 4.1775 16.4265 6 18V21.4688L9.3285 19.8045C10.1745 20.0595 11.0595 20.25 12 20.25C16.9425 20.25 21 16.3973 21 11.625C21 6.85275 16.9425 3 12 3ZM12 4.5C16.1693 4.5 19.5 7.6995 19.5 11.625C19.5 15.5505 16.1693 18.75 12 18.75C11.1038 18.75 10.248 18.5798 9.4455 18.3045L9.141 18.2108L7.5 19.0312V17.3438L7.21875 17.109C5.5545 15.7972 4.5 13.8315 4.5 11.625C4.5 7.6995 7.83075 4.5 12 4.5ZM11.1562 9.258L6.633 14.0392L10.6875 11.7892L12.8438 14.1097L17.3205 9.25725L13.359 11.4847L11.1562 9.258Z"
                      fill="#262626"
                    />
                  </svg>
                </Link>
              </div>
              <div className="msg1">
                <Link className="link" to="/chat">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.6001 5.99998C3.6001 5.36346 3.85295 4.75301 4.30304 4.30292C4.75313 3.85283 5.36358 3.59998 6.0001 3.59998H18.0001C18.6366 3.59998 19.2471 3.85283 19.6972 4.30292C20.1472 4.75301 20.4001 5.36346 20.4001 5.99998V18C20.4001 18.6365 20.1472 19.2469 19.6972 19.697C19.2471 20.1471 18.6366 20.4 18.0001 20.4H6.0001C5.36358 20.4 4.75313 20.1471 4.30304 19.697C3.85295 19.2469 3.6001 18.6365 3.6001 18V5.99998ZM6.0001 4.79998C5.68184 4.79998 5.37661 4.9264 5.15157 5.15145C4.92653 5.37649 4.8001 5.68172 4.8001 5.99998V18C4.8001 18.3182 4.92653 18.6235 5.15157 18.8485C5.37661 19.0735 5.68184 19.2 6.0001 19.2H18.0001C18.3184 19.2 18.6236 19.0735 18.8486 18.8485C19.0737 18.6235 19.2001 18.3182 19.2001 18V5.99998C19.2001 5.68172 19.0737 5.37649 18.8486 5.15145C18.6236 4.9264 18.3184 4.79998 18.0001 4.79998H6.0001ZM12.0001 7.19998C12.1592 7.19998 12.3118 7.26319 12.4244 7.37571C12.5369 7.48823 12.6001 7.64085 12.6001 7.79998V11.4H16.2001C16.3592 11.4 16.5118 11.4632 16.6244 11.5757C16.7369 11.6882 16.8001 11.8408 16.8001 12C16.8001 12.1591 16.7369 12.3117 16.6244 12.4242C16.5118 12.5368 16.3592 12.6 16.2001 12.6H12.6001V16.2C12.6001 16.3591 12.5369 16.5117 12.4244 16.6242C12.3118 16.7368 12.1592 16.8 12.0001 16.8C11.841 16.8 11.6884 16.7368 11.5758 16.6242C11.4633 16.5117 11.4001 16.3591 11.4001 16.2V12.6H7.8001C7.64097 12.6 7.48836 12.5368 7.37583 12.4242C7.26331 12.3117 7.2001 12.1591 7.2001 12C7.2001 11.8408 7.26331 11.6882 7.37583 11.5757C7.48836 11.4632 7.64097 11.4 7.8001 11.4H11.4001V7.79998C11.4001 7.64085 11.4633 7.48823 11.5758 7.37571C11.6884 7.26319 11.841 7.19998 12.0001 7.19998Z"
                      fill="#262626"
                    />
                  </svg>
                </Link>
              </div>
              <div className="msg2">
                <Link className="link" to="/chat">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2.4375C10.1087 2.4375 8.25991 2.99833 6.68736 4.04907C5.11482 5.09981 3.88917 6.59327 3.16541 8.34059C2.44164 10.0879 2.25227 12.0106 2.62125 13.8656C2.99022 15.7205 3.90096 17.4244 5.2383 18.7617C6.57563 20.099 8.27951 21.0098 10.1345 21.3788C11.9894 21.7477 13.9121 21.5584 15.6594 20.8346C17.4067 20.1108 18.9002 18.8852 19.9509 17.3126C21.0017 15.7401 21.5625 13.8913 21.5625 12C21.5597 9.46474 20.5513 7.03414 18.7586 5.24144C16.9659 3.44874 14.5353 2.44035 12 2.4375ZM12 20.4375C10.3312 20.4375 8.69992 19.9426 7.31238 19.0155C5.92484 18.0884 4.84339 16.7706 4.20477 15.2289C3.56616 13.6871 3.39907 11.9906 3.72463 10.3539C4.05019 8.71721 4.85379 7.21379 6.03379 6.03379C7.2138 4.85378 8.71722 4.05019 10.3539 3.72462C11.9906 3.39906 13.6871 3.56615 15.2289 4.20477C16.7706 4.84338 18.0884 5.92484 19.0155 7.31238C19.9427 8.69992 20.4375 10.3312 20.4375 12C20.435 14.237 19.5452 16.3816 17.9634 17.9634C16.3816 19.5452 14.237 20.435 12 20.4375ZM15.9915 7.25306L10.1756 9.89691C10.048 9.95495 9.94668 10.0586 9.89147 10.1874L7.50497 15.7559C7.46071 15.8592 7.44841 15.9735 7.46968 16.0838C7.49094 16.1942 7.54479 16.2957 7.62427 16.3752C7.70376 16.4547 7.80523 16.5085 7.91561 16.5298C8.02599 16.551 8.14021 16.5387 8.24354 16.4945L13.812 14.108C13.9412 14.0526 14.045 13.9508 14.1029 13.8227L16.7368 7.99688C16.7839 7.89263 16.7982 7.77648 16.7776 7.66394C16.757 7.5514 16.7026 7.44781 16.6216 7.367C16.5406 7.28618 16.4369 7.23198 16.3244 7.21162C16.2118 7.19126 16.0957 7.20572 15.9915 7.25306ZM13.1679 13.1601L12 12L10.8396 10.8308L15.0956 8.89612L13.1679 13.1601Z"
                      fill="#262626"
                    />
                  </svg>
                </Link>
              </div>
              <div className="notify">
                <Link className="link" to="/chat">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.6734 18.5534C21.0306 17.9802 20.4677 17.3232 20.0001 16.6C19.4896 15.6017 19.1836 14.5115 19.1001 13.3934V10.1C19.1045 8.34376 18.4675 6.64633 17.3086 5.32666C16.1498 4.007 14.5489 3.15592 12.8068 2.93335V2.07335C12.8068 1.83731 12.713 1.61093 12.5461 1.44402C12.3792 1.27712 12.1528 1.18335 11.9168 1.18335C11.6807 1.18335 11.4544 1.27712 11.2875 1.44402C11.1205 1.61093 11.0268 1.83731 11.0268 2.07335V2.94668C9.30029 3.1853 7.71876 4.04152 6.57513 5.35675C5.4315 6.67199 4.80327 8.35711 4.80678 10.1V13.3934C4.72328 14.5115 4.4173 15.6017 3.90678 16.6C3.44737 17.3216 2.89358 17.9785 2.26011 18.5534C2.189 18.6158 2.13201 18.6927 2.09293 18.7789C2.05384 18.8651 2.03357 18.9587 2.03345 19.0534V19.96C2.03345 20.1368 2.10369 20.3064 2.22871 20.4314C2.35373 20.5564 2.5233 20.6267 2.70011 20.6267H21.2334C21.4103 20.6267 21.5798 20.5564 21.7049 20.4314C21.8299 20.3064 21.9001 20.1368 21.9001 19.96V19.0534C21.9 18.9587 21.8797 18.8651 21.8406 18.7789C21.8016 18.6927 21.7446 18.6158 21.6734 18.5534ZM3.42011 19.2934C4.04039 18.6942 4.58651 18.0227 5.04678 17.2934C5.68986 16.0877 6.06507 14.7574 6.14678 13.3934V10.1C6.12034 9.31871 6.2514 8.54007 6.53214 7.81046C6.81289 7.08086 7.23759 6.41521 7.78095 5.85315C8.3243 5.29109 8.97521 4.84413 9.6949 4.53887C10.4146 4.2336 11.1884 4.07629 11.9701 4.07629C12.7519 4.07629 13.5256 4.2336 14.2453 4.53887C14.965 4.84413 15.6159 5.29109 16.1593 5.85315C16.7026 6.41521 17.1273 7.08086 17.4081 7.81046C17.6888 8.54007 17.8199 9.31871 17.7934 10.1V13.3934C17.8752 14.7574 18.2504 16.0877 18.8934 17.2934C19.3537 18.0227 19.8998 18.6942 20.5201 19.2934H3.42011Z"
                      fill="#262626"
                    />
                    <path
                      d="M12 22.8534C12.42 22.8437 12.823 22.6858 13.1378 22.4077C13.4525 22.1295 13.6588 21.749 13.72 21.3334H10.2134C10.2764 21.7602 10.4923 22.1497 10.8209 22.4293C11.1496 22.7089 11.5686 22.8596 12 22.8534Z"
                      fill="#262626"
                    />
                  </svg>
                </Link>
              </div>
              <div className="prof">
                <Link className="link" to="/account">
                  {" "}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9998 23.2002C18.1854 23.2002 23.1998 18.1858 23.1998 12.0002C23.1998 5.81458 18.1854 0.800171 11.9998 0.800171C5.81422 0.800171 0.799805 5.81458 0.799805 12.0002C0.799805 18.1858 5.81422 23.2002 11.9998 23.2002Z"
                      fill="#8E8E8E"
                    />
                    <path
                      d="M12.0003 13.8C14.5408 13.8 16.6003 11.7405 16.6003 9.19998C16.6003 6.65947 14.5408 4.59998 12.0003 4.59998C9.45986 4.59998 7.40039 6.65947 7.40039 9.19998C7.40039 11.7405 9.45986 13.8 12.0003 13.8Z"
                      fill="white"
                    />
                    <path
                      d="M19.9307 19.9082C17.903 21.9416 15.0984 23.1998 11.9999 23.1998C8.9014 23.1998 6.09677 21.9416 4.06909 19.9082C4.99381 16.3927 8.19407 13.7999 11.9999 13.7999C15.8057 13.7999 19.006 16.3927 19.9307 19.9082Z"
                      fill="white"
                    />
                    <path
                      d="M22.5998 12.0002C22.5998 17.8544 17.854 22.6002 11.9998 22.6002C6.14559 22.6002 1.3998 17.8544 1.3998 12.0002C1.3998 6.14595 6.14559 1.40017 11.9998 1.40017C17.854 1.40017 22.5998 6.14595 22.5998 12.0002Z"
                      stroke="#8E8E8E"
                      stroke-width="1.2"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div
        className="hate_you"
        style={{
          height: "200px",
          width: "265px",
          background: "white",
          alignItems: "center",
          border: "1px solid black",
          padding: "5px",
          margin: "auto",
          display: "none",
          position: "absolute",
          top: "60px",
          left: "765px",
          overflow: "scroll",
          zIndex: 1,
        }}
      >
        {display.map((el) => (
          <Link style={{ display: "flex", flexDirection: "row" }} to={`/Postpage/${el.user_name}`} >
            <div>
              <img src={el.profile_pic} alt="dp" width="30px" height="30px" />
            </div>
            <div style={{ margin: "0px 5px" }}>
              <h4 style={{ margin: "0px" }}>{el.user_name}</h4>
              <h6 style={{ margin: "0px" }}>{el.description}</h6>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export { Navbar };
