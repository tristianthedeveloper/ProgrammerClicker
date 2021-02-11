import * as ReactDOM from "react-dom";
import * as React from "react";
import Canvas from "./components/canvas/LeftCanvas"

function App() {

    const [humans, setHumans] = React.useState(0);
    const [hps, setHps] = React.useState(0);
    const state = {
        data: {
            humans: [humans, setHumans],
            hps : [hps, setHps]
        }
    }

    var callbackFunction = (childData) => {
        state.data = childData;
    }


    return (
        <div>
            <Canvas.Canvas parentCallback = {callbackFunction} dataFromParent={state.data} />
            <canvas id="objectRenderingCanvasRight" class="right"></canvas>
        </div>

    )

}

ReactDOM.render(<App />, document.getElementById('root'));

