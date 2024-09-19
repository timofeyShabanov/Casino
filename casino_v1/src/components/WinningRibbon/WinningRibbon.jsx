import cl from "./WinningRibbon.module.css";

const WinningRibbon = ({ balance, resultOfSpin }) => {
  if (balance < 100) {
    return (
      <div className={cl.winning__strict}>
        <div className={cl.winning__strict__text}>
          <p>Not enough money on balance</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cl.winning__strict}>
      <div className={cl.winning__strict__text}>
        {resultOfSpin === ""
          ? "Lets spin"
          : resultOfSpin === "0"
            ? resultOfSpin
            : "+ " + resultOfSpin}
      </div>
    </div>
  );
};

export default WinningRibbon;
