
import * as React from "react"
import angular from "../../img/angularlmao.jpg"


const Canvas = (props) => {

    console.log(props);

    const data = props.dataFromParent;

    const canvasRef = React.useRef(null);
    const buttonRef = React.useRef(null);

    const [humans, setHumans] = data.humans;
    
    const [hps,  setHps] = data.hps;

    function handleClick() {
        data.humans = [humans, setHumans];
        props.parentCallback(data);
        setHumans(humans + 1);
    }


    React.useEffect(() => {

        buttonRef.current.style.backgroundImage = `url(${angular})`;


    }, [canvasRef, buttonRef]);



    return (
        <div class='right' id='rightRenderingCanvas'>
            <div id='humanCounter' class='aboveButton'> {humans} Humans</div>
            <div id='humansPerSecondCounter' class='hpsCounter'> {hps} Humans Per Second </div>
            <div onClick={() => handleClick()} class='buttonMadeForClicking' ref={buttonRef} id='angularButton'></div>
            <canvas ref={canvasRef} />
        </div>
    )
}

export default {
    Canvas
}