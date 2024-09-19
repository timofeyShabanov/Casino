import cl from "./CasinoSlots.module.css";
import SpinAnimation from "../SpinAnimation/SpinAnimation.jsx";

const CasinoSlots = ({ children }) => {
  const returnImg = () => {
    switch (children) {
      case 1:
        return (
          <div>
            <img className={cl.slot__img} src={'public/images/nodeJs.png'} alt='Node.js' />
          </div>
        );
      case 2:
        return (
          <div>
            <img className={cl.slot__img} src={'public/images/html.png'} alt='HTML' />
          </div>
        );
      case 3:
        return (
          <div>
            <img className={cl.slot__img} src={'public/images/css.png'} alt='CSS' />
          </div>
        );
      case 4:
        return (
          <div>
            <img className={cl.slot__img} src={'public/images/js.png'} alt='JavaScript' />
          </div>
        );
      case 5:
        return (
          <div>
            <img className={cl.slot__img} src={'public/images/python.png'} alt='Python' />
          </div>
        );
      case 6:
        return (
          <div>
            <img className={cl.slot__img} src={'public/images/cPlusPlus.png'} alt='C++' />
          </div>
        );
      case 7:
        return (
          <div>
            <img className={cl.slot__img} src={'public/images/asm.png'} alt='asm' />
          </div>
        );
      default:
        return <SpinAnimation/>;
    }
  };

  return (
      <div className={cl.slot}>
        {returnImg()}
      </div>
  );
};

export default CasinoSlots;
