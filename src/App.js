import logo from "./logo.svg";
import "./App.css";
import { ToolTip } from "./components/tooltip";
function App() {
  return (
    <>
      <h1>React Tooltip</h1>
      <div className="App">
        {/* tooltip left */}
        <button style={{ backgroundColor: "red" }}>
          <a
            data-tooltip-id="btn-1"
            data-tooltip-content="hi i am a tooltip on left"
          >
            hover on me!
          </a>
        </button>
        <ToolTip data={{ place: "left", id: "btn-1" }} />
        {/* tooltip top */}
        <button style={{ backgroundColor: "blue" }}>
          <a
            data-tooltip-id="btn-2"
            data-tooltip-content="hi i am a tooltip on top "
          >
            hover on me!
          </a>
        </button>
        <ToolTip data={{ place: "top", id: "btn-2" }} />
        {/* tooltip bottom */}
        <button style={{ backgroundColor: "green" }}>
          <a
            data-tooltip-id="btn-3"
            data-tooltip-content="hi i am a tooltip on bottom"
          >
            hover on me!
          </a>
        </button>
        <ToolTip data={{ place: "bottom", id: "btn-3" }} />
        {/* tooltip right */}
        <button style={{ backgroundColor: "yellow" }}>
          <a
            data-tooltip-id="btn-4"
            data-tooltip-content="hi i am a tooltip right"
          >
            hover on me!
          </a>
        </button>
        <ToolTip data={{ place: "right", id: "btn-4" }} />
      </div>
    </>
  );
}

export default App;
