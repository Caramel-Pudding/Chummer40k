import React, { FC, useState } from "react";
import { render, cleanup } from "@/tests/test-utils";

import { BasicMultiSelct } from "..";

describe("<BasicMultiSelct />", () => {
  afterEach(cleanup);

  const TestWrapper: FC = () => {
    const options = ["TEST1", "TEST2"];
    const [selectValue, setSelectValue] = useState([options[0]]);

    return (
      <BasicMultiSelct
        chosenOptions={selectValue}
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
