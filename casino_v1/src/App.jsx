import "./App.css";
import CasinoSlots from "./components/casinoSlots/CasinoSlots.jsx";
import WinningRibbon from "./components/WinningRibbon/WinningRibbon.jsx";
import ProfileModal from "./components/Profile/ProfileModal.jsx";
import ProfileIcon from "./components/Profile/ProfileIcon.jsx";
import { useState } from "react";
import Button from "./components/Button/Button.jsx";

function App() {
  const [balance, setBalance] = useState(0);
  const [resultOfSpin, setResultOfSpin] = useState("");
  const [modal, setModal] = useState(false);
  const [ifButtonDisabled, setIfButtonDisabled] = useState(false);
  const [numberOfSpins, setNumberOfSpins] = useState(1);
  const [resultOfSpin1, setResultOfSpin1] = useState(0);
  const [resultOfSpin2, setResultOfSpin2] = useState(0);
  const [resultOfSpin3, setResultOfSpin3] = useState(0);

  function changeBalance(symbol, number) {
    setBalance((prevBalance) => {
      switch (symbol) {
        case "+":
          return prevBalance + number;
        case "-":
          return prevBalance - number;
      }
    });
  }

  function randomNumber() {
    return Math.floor(Math.random() * 7) + 1;
  }

  const numberOfSpinCalculation = () => {
    setNumberOfSpins((prevBalance) => prevBalance + 1);
  };

  const playingCasino = () => {
    setIfButtonDisabled(true)
    const spin1return = randomNumber();
    const spin2return = randomNumber();
    const spin3return = randomNumber();
    setResultOfSpin('0')
    setResultOfSpin1(0);
    setResultOfSpin2(0);
    setResultOfSpin3(0);

    changeBalance("-", 100);

    setTimeout(() => {
      setResultOfSpin1(spin1return);
    }, 1000);
    setTimeout(() => {
      setResultOfSpin2(spin2return);
    }, 1500);
    setTimeout(() => {
      setResultOfSpin3(spin3return);
      setIfButtonDisabled(false)
      if (spin1return === 7 && spin2return === 7 && spin3return === 7) {
        changeBalance("+", 10000);
        setResultOfSpin("10000");
      } else if (spin1return === spin2return && spin2return === spin3return) {
        changeBalance("+", 800);
        setResultOfSpin("800");
      } else if (
        spin1return === spin2return ||
        spin2return === spin3return ||
        spin1return === spin3return
      ) {
        changeBalance("+", 200);
        setResultOfSpin("200");
      } else {
        setResultOfSpin("0");
      }
    }, 2000);
  };
  return (
    <>
      <div className={"casino__slots__container"}>
        <CasinoSlots children={resultOfSpin1} />
        <CasinoSlots children={resultOfSpin2} />
        <CasinoSlots children={resultOfSpin3} />
      </div>

      <div className={"profile__container"}>
        <ProfileIcon
          className={"profile__icon"}
          onClick={() => setModal(true)}
        />
        <div className={"balance__text"}>
          Balance:
          <span style={{ color: "#1b5e20", marginLeft: 8 }}>{balance}$</span>
        </div>
      </div>

      <div className={"winning__ribbon__container"}>
        <WinningRibbon
          className={"winning__ribbon"}
          resultOfSpin={resultOfSpin}
          balance={balance}
        />
        <Button
          onClick={() => {
            playingCasino();
            numberOfSpinCalculation();
          }}
          disabled={balance < 100 || ifButtonDisabled}
        />
      </div>

      <ProfileModal visible={modal} setVisible={setModal}>
        <div>
          Your balance:
          <span style={{ color: "#1b5e20", marginLeft: 8,}}>
            {balance}$
          </span>
        </div>
        <button
          className={'modal__button'}
          style={{color: "#1b5e20"}}
          onClick={() => changeBalance("+", 1000)}>
          +1000$
        </button>
        <button
          className={'modal__button'}
          style={{marginLeft: 20, color: "#8B0000"}}
          onClick={() => changeBalance("-", 1000)}>
          -1000$
        </button>
        <div
          style={{marginTop: 6}}>
          Your spins: {numberOfSpins}
        </div>
      </ProfileModal>
    </>
  );
}

export default App;