import HomePage from "./homepage";
import Modal from "./modal";
import { ModalProvider } from "./modal.context";

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <HomePage />
        <Modal message="oi" />
      </div>
    </ModalProvider>
  );
}

export default App;
