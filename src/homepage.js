import { Button } from "antd";
import { useModal } from "./useModal";

const HomePage = () => {
  const { openModal } = useModal();
  const testModal = () => openModal({ message: "Test" });
  return (
    <div>
      <h1>home</h1>
      <Button onClick={testModal} type="primary">
        Open modal
      </Button>
    </div>
  );
};

export default HomePage;
