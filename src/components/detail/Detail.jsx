import "./detail.css";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Gojo</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://ih1.redbubble.net/image.5257098384.9825/raf,360x360,075,t,fafafa:ca443f4786.jpg"
                  alt=""
                />
                <span>photo_2024_gojo.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://ih1.redbubble.net/image.5257098384.9825/raf,360x360,075,t,fafafa:ca443f4786.jpg"
                  alt=""
                />
                <span>photo_2024_gojo.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://ih1.redbubble.net/image.5257098384.9825/raf,360x360,075,t,fafafa:ca443f4786.jpg"
                  alt=""
                />
                <span>photo_2024_gojo.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://ih1.redbubble.net/image.5257098384.9825/raf,360x360,075,t,fafafa:ca443f4786.jpg"
                  alt=""
                />
                <span>photo_2024_gojo.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout">Logout!</button>
      </div>
    </div>
  );
};

export default Detail;
