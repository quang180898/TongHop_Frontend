import React from "react";
import { useCountDown } from "useHook";

const CountDownTimer = ({ targetDate }) => {

    const { days, hours, minutes, seconds } = useCountDown(targetDate);

    return (
        <ul className="countdown-timer">
          <li><span>{days ? days : "00"}</span></li>
          <li><span>{hours ? hours : "00"}</span></li>
          <li><span>{minutes ? minutes : "00"}</span></li>
          <li><span>{seconds ? seconds : "00"}</span></li>
      </ul>
    )
}

export default CountDownTimer;