import React from "react";

import Modal from "./components/Modal";

import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const modal = isModalOpen ? (
    <Modal visible={isModalOpen} closeHandler={() => setIsModalOpen(false)}>
      <div
        className="flex flex-col items-center p-10 space-y-6 modal"
        onClick={() => {
          setIsModalOpen(false);
        }}
      >
        <span className="font-ssp text-[22px]">
          Are you sure you want to cancel the transaction?
        </span>
        <div className="flex space-x-10">
          <button
            onClick={(e) => {
              // setIsModalOpen(false);
              e.stopPropagation();
            }}
            className="px-6 py-2 font-bold text-white rounded bg-primary-650 font-ssp"
          >
            Yes
          </button>
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-6 py-2 font-bold text-white rounded bg-primary font-ssp"
          >
            No
          </button>
        </div>
      </div>
    </Modal>
  ) : (
    <></>
  );

  return (
    <div className="app flex flex-col space-y-4 items-center p-4 justify-center">
      <div className="font-semibold text-base">
        This div has overflow: hidden.
      </div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="p-2 border-2 border-red-100 text-black font-medium text-lg my-2 mx-8"
      >
        Show modal
      </button>
      {modal}
    </div>
  );
}

export default App;
