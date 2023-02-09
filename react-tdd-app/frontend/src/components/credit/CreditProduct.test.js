const { render, screen } = require("@testing-library/react");
const { default: CreditProductList } = require("./CreditProductList");

test("엘리먼트가 존재할 때 렌더링을 잘 해주는 가", () => {
  const element = {
    count: 10,
    title: "America",
    isInsurance: true,
    isDinner: true,
    insFirstClass: false,
  };

  render(<CreditProductList element={element} />);

  const titleElement = screen.getByTestId("title");
  const countElement = screen.getByTestId("count");

  expect(titleElement).toHaveTextContent("America");
  expect(countElement).toHaveTextContent("10");
});
