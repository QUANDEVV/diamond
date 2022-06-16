import React from "react";
// import "./VideoFooter.css";

import Ticker from "react-ticker";

function VideoFooter({ }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
   
        <div className="videoFooter__ticker">
          
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>Hello  world</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
    
    </div>
  );
}

export default VideoFooter;