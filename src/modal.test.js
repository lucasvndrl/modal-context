import { act, screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ReactDOM from "react-dom";
import Modal from "./modal";

let mockCloseModal = jest.fn();

jest.mock("./useModal", () => ({
  useModal: () => ({
    state: {
      visible: true,
    },
    closeModal: mockCloseModal,
  }),
}));

describe("Modal component test", () => {
  beforeEach(() => {
    render(<Modal message="testMessage" />);
  });

  test("Should render Modal correctly", () => {
    const modal = screen.getByTestId("modal");
    expect(modal).toBeInTheDocument();
  });

  test("Should display message props correctly", () => {
    const message = screen.getByText("testMessage");
    expect(message).toBeInTheDocument();
  });

  test("Should call closeModal function correctly after clicking the close button", async () => {
    const closeBtn = screen.getByText("Cancel");

    await act(async () => userEvent.click(closeBtn));

    expect(mockCloseModal).toBeCalled();
  });
});
