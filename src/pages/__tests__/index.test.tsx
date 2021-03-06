import { render } from "@/tests/test-utils";

import { Layout } from "../../components/layout";
import Home from "..";

describe("The Home Page Component", () => {
  it("should have exactly 1 `main` section", () => {
    // The getByRole will error if there are less or more than 1 element found
    const { getByRole } = render(
      <Layout>
        <Home />
      </Layout>,
      {}
    );
    const main = getByRole("main");
    expect(main).toBeInTheDocument();
  });
});
