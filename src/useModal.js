import { useContext } from "react";
import { ModalContext } from "./modal.context";

const useModal = () => {
  const context = useContext(ModalContext);
  if (!context)
    throw new Error("useModal must be used within an ModalProvider");
  return context;
};

export { useModal };
