import React, {useEffect} from "react";

export default function Time () {
    
    /*
    function tick(){
        const time = new Date().toLocaleTimeString()
        return (
            <div> {time} </div>
        );
    }
    tick();
    setInterval(tick, 1000);
    */

    /*
    let timeNow;
    function time (){
        return (new Date().toLocaleTimeString())
    }
    timeNow = time();
    setInterval(time(), 1000);
    */

    function time (){
        return (new Date().toLocaleTimeString())
    }
    let timeNow =time()
    useEffect(() => {
        time()
        return () => setInterval(time(), 1000);;
      }); 

    return (
        <div>
            <p> Current time is {timeNow} </p>
        </div>
    );
    
} 