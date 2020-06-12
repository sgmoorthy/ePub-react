import React, { Component } from "react";
import { ReactReader } from "react-reader";
import { ReaderContainer } from "./components";

//import DEMO_URL from "./UnmaiArithal_ThiruVilanga.epub";

const storage = global.localStorage || null;

const DEMO_URL =
  "https://sgmoorthy.github.io/ePub-react/src/UnmaiArithal_ThiruVilanga.epub";
const DEMO_NAME = "Unnmai Arithal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullscreen: true,
      location:
        storage && storage.getItem("epub-location")
          ? storage.getItem("epub-location")
          : 2,
      localFile: null,
      localName: null,
      largeText: false
    };
    this.rendition = null;
  }
  toggleFullscreen = () => {
    this.setState(
      {
        fullscreen: !this.state.fullscreen
      },
      () => {
        setTimeout(() => {
          const evt = document.createEvent("UIEvents");
          evt.initUIEvent("resize", true, false, global, 0);
        }, 1000);
      }
    );
  };

  render() {
    const { fullscreen, location, localFile, localName } = this.state;
    return (
      <ReaderContainer fullscreen={fullscreen}>
        <ReactReader
          url={localFile || DEMO_URL}
          title={localName || DEMO_NAME}
          location={location}
          locationChanged={this.onLocationChanged}
          getRendition={this.getRendition}
        />
      </ReaderContainer>
    );
  }
}
export default App;
