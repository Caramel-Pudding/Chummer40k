import React, { FC, useState } from "react";
import { render, cleanup } from "@/tests/test-utils";

import { BasicCheckbox, BasicCheckboxProps } from "..";

describe("<BasicCheckbox/>", () => {
  afterEach(cleanup);

  const TestWrapper: FC<Partial<BasicCheckboxProps>> = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
      <BasicCheckbox
        checked={isChecked}
        handler={setIsChecked}
        labelText="TEST"
      />
    );
  };

  it("Basic snapshot test", () => {
    // * #TEST: ARRANGE
    const { container } = render(<TestWrapper />, {});
    // * #TEST: ASSERT
    expect(container).toMatchSnapshot();
  });
});
