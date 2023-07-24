import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  // const step = 1;
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const handlePrevious = () => {
  //   if (step > 1) {
  //   // console.log(step)
  //     setStep(step - 1)
  //   }
  // }
  const handlePrevious = () => step > 1 && setStep(step - 1);

  // const handleNext = () => {
  //   if (step < 3) {
  //   // console.log(step)
  //     setStep(step + 1)
  //   }
  // }
  const handleNext = () => step < 3 && setStep(step + 1);


  // const handleClose = () => setIsOpen(false);

  // const handleOpen = () => setIsOpen(true);


  const handleClopen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      {/* if isOpen is true, render component, else '' */}

      {isOpen ? (
        <div>
          <button onClick={handleClopen} className='close'> &times; </button>
          <div className="steps">
            <div className="numbers">
              <div className={step >= 1 ? "active" : ""}>1</div>
              <div className={step >= 2 ? "active" : ""}>2</div>
              <div className={step >= 3 ? "active" : ""}>3</div>
            </div>
            <p className="message">
              {" "}
              Step {step} : {messages[step - 1]}{" "}
            </p>
            <div className="buttons">
              <button
                onClick={handlePrevious}
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
              >
                {" "}
                Next{" "}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>The page you are looking for is not here!</h1>
          <button onClick={handleClopen} className='close'> &#10003; </button>
        </div>
      )}
    </div>
  );
}

export default App;
