import "./App.css";
import { useState, useRef, useEffect } from "react";
import * as _ from "lodash";
import { connect } from "react-redux";
import axios from "axios";

const list1 = ["list1", "list2", "list3", "list4", "list5", "list6", "list7"];

var client_id = "1a7929e4a1484d2bab98c1db478a5ad5";
var client_secret = "c5a26d3e34d04fbca5864445739f5fca";

function App({ playlist, updatePalylist, getSpotifyList }) {
  const dragItem = useRef();
  const [token, setToken] = useState([]);
  const dragStart = (e, index) => {
    dragItem.current = index;
  };

  const onDrop = (e) => {
    const playList1 = [...playlist];
    const copyListItems = [...list1];
    const dragItemContent = copyListItems[dragItem.current];
    if (!playList1.includes(dragItemContent)) {
      playList1.push(dragItemContent);
    }

    dragItem.current = null;
    updatePalylist(playList1);
  };


  //Getting Invalid client error in spotify api to get the access token
  //Without authorization token we can't access the api data
  //All functionality is done by taking dummy list



  axios("https://accounts.spotify.com/authorize", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic" + btoa(client_id + ":" + client_secret),
    },
    data: "grant_type-client_credentials",
    method: "POST",
  })
    .then((res) => {
      console.log(res, "res")
    //setToken()
  })
    .catch((e) => {
      console.log(e, "error");
    });

  useEffect(() => {
    getSpotifyList();
  });


  return (
    <div className="Home">
      <div className="Musiclist">
        <div>Music List</div>
        {list1.map((item, index) => (
          <div
            onDragStart={(e) => dragStart(e, index)}
            onDragEnd={onDrop}
            key={index}
            draggable
          >
            {item}
          </div>
        ))}
      </div>
      <div className="Mymusiclist">
        <div>Playlist</div>
        {playlist && playlist.map((item) => <div key={item}>{item}</div>)}
      </div>
    </div>
  );
}

const mapStateToProps = ({ user = {} }) => {
  const playlist = _.get(user, "playlist", []);
  return {
    playlist,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updatePalylist: (data) =>
    dispatch({ type: "updatePlailistCalled", payload: data }),
  getSpotifyList: (data) =>
    dispatch({ type: "getSpotifyListCalled", payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
