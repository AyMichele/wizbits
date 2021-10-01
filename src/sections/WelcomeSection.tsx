import { useState } from "react";
import WelcomeBits from "../assets/pictures/welcome-bits.svg";
import { animated, useTransition } from "@react-spring/web";
import { useEffect } from "react";

const WelcomeSection = () => {
  const [logoWords, setLogoWords] = useState({
    firstWord: ["w", "y", "z"],
    secondWord: ["B", "i", "t", "s"],
  });
  const [flipped, setFlipped] = useState(false);

  const transitions = useTransition(logoWords.secondWord, {
    from: { transform: "perspective(600px) rotateY(-0deg)" },
    enter: [{ transform: "perspective(600px) rotateY(-360deg)" }],
    config: { mass: 1, tension: 500, friction: 0, clamp: true },
    trail: 200,
  });

  useEffect(() => {
    setFlipped(true);
  }, []);

  return (
    <section className="welcomeSection">
      <div className="d-flex justify-content-center logocon">
        <div className="d-flex">
          {logoWords.firstWord.map((char: string) => {
            return (
              <div
                className={` wiz-chars wiz-font-link ${
                  flipped ? char + "glow" : ""
                } `}
              >
                {char}
              </div>
            );
          })}
        </div>
        <div className="d-flex">
          {transitions((props, item: string) => (
            <animated.div
              style={props}
              className={`bits-font-link ${
                flipped ? item + "g" : ""
              } bits-chars ${item}`}
            >
              {item}
            </animated.div>
          ))}
        </div>
      </div>
      <div className="welcome-bits">
        <img src={WelcomeBits}></img>
      </div>
    </section>
  );
};

export { WelcomeSection };
