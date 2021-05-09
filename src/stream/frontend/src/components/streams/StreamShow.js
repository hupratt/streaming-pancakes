import React from "react";
import ReactHlsPlayer from "react-hls-player";
import { connect } from "react-redux";

const StreamShow = ({ userInfo }) => {
  return (
    <React.Fragment>
      {userInfo && userInfo.id > 0 ? (
        <ReactHlsPlayer
          src="https://live.craftstudios.eu:8443/stream/stream.m3u8"
          autoPlay={true}
          controls={true}
          width="100%"
          height="auto"
        />
      ) : (
        <h1>Please log in to view the stream</h1>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { userInfo: state.auth.userInfo };
};

export default connect(mapStateToProps)(StreamShow);
