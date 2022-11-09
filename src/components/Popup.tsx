import "./popup.css";

const Popup = ({ setShowPopup }: { setShowPopup: Function }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-slate-500/[0.8] flex justify-center items-center">
      <div className="w-fit h-[30vh] p-5 bg-slate-300 rounded-xl flex flex-col text-black transition-popup">
        <h1 className="mb-5">Ma popup</h1>
        <p className="flex-grow">Du text qui dit ce que fait ma popup</p>
        <button
          className="w-fit mx-auto bg-lime-500"
          onClick={() => setShowPopup(false)}
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default Popup;
