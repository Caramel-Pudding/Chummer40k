import React, { FC, useState } from "react";
import { render, cleanup } from "@/tests/test-utils";

import { BasicSelct } from "..";

describe("<BasicSelect />", () => {
  afterEach(cleanup);

  const TestWrapper: FC = () => {
    const options = ["TEST1", "TEST2"];
    const [selectValue, setSelectValue] = useState(options[0]);

    return (
      <BasicSelct
        chosenOption={selectValue}
        handler={setSelectValue}
        labelText="TEST"
        options={options}
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
