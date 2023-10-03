//검사할 url 리스트
const urls = ["/", "/hello"];

describe("url traverse", () => {
  urls.forEach((url) => {
    it(url, () => {
      cy.visit(url);

      //리액트 컴포넌트가 마운트될때까지 대기
      cy.get("#root").should("not.be.empty");

      //네트워크 요청 갯수가 0이 될 때까지 대기
      cy.waitUntilNetworkIdle();

      //error-boundary가 렌더링되었다면 exception이 발생한 것이다
      cy.get("#error-boundary", { timeout: 0 }).should("not.exist");
    });
  });
});
