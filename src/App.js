import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setstep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlerPrevious() {
    if (step > 1) setstep((s) => s - 1);
  }
  function nextPrevious() {
    if (step < 3) setstep((s) => s + 1);
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            step {step} :{messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlerPrevious}
            >
              Pervious
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={nextPrevious}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
