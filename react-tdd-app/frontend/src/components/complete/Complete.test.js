const { default: useStore } = require("@store/store");
const { screen, fireEvent, render } = require("@testing-library/react");
const { BrowserRouter } = require("react-router-dom");
const { default: Complete } = require("./Complete");

test("주문완료 페이지 렌더링", async () => {
  render(
    <BrowserRouter>
      <Complete />
    </BrowserRouter>
  );

  const completeHeader = await screen.findByRole("heading", {
    name: "주문이 성공했습니다.",
  });

  expect(completeHeader).toBeInTheDocument();

  const firstPageButton = screen.getByRole("button", { name: "첫 페이지로" });
  fireEvent.click(firstPageButton);
});
