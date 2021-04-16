import React, { FC, useState } from "react";
import { render, cleanup } from "@/tests/test-utils";

import { BasicInput } from "..";

describe("<BasicInput/>", () => {
  afterEach(cleanup);

  const TestWrapper: FC = () => {
    const [inputValue, setInputValue] = useState("");

    return (
      <BasicInput handler={setInputValue} labelText="TEST" value={inputValue} />
    );
  };

  it("Basic snapshot test", () => {
    // * #TEST: ARRANGE
    const { container } = render(<TestWrapper />, {});
    // * #TEST: ASSERT
    expect(container).toMatchSnapshot();
  });
});
