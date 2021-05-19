import HomePage from './homepage'
import Modal from './modal'
import { ModalProvider } from './modal.context'

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <HomePage />
        <Modal />
      </div>
    </ModalProvider>
  );
}

export default App;
