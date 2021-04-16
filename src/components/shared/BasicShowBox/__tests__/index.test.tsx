import { render, cleanup } from "@/tests/test-utils";

import { BasicShowBox } from "..";

describe("<BasicShowBox />", () => {
  afterEach(cleanup);

  it("Basic snapshot test", () => {
    // * #TEST: ARRANGE
    const { container } = render(<BasicShowBox text="TEST" />, {});
    // * #TEST: ASSERT
    expect(container).toMatchSnapshot();
  });
});
