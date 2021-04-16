import React, { FC, useState } from "react";
import { render, cleanup } from "@/tests/test-utils";

import { BasicMultiSelct, BasicMultiSelctProps } from "..";

describe("<BasicMultiSelct />", () => {
  afterEach(cleanup);

  const testLabel = "TEST";
  const options = ["TEST1", "TEST2"];
  const TestWrapper: FC<Partial<BasicMultiSelctProps>> = () => {
    const [selectValue, setSelectValue] = useState([options[0]]);

    return (
      <BasicMultiSelct
        chosenOptions={selectValue}
        handler={setSelectValue}
        labelText={testLabel}
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

  it("should render proper label", () => {
    // * #TEST: ARRANGE
    const { container, getByText } = render(<TestWrapper />, {});
    const label = getByText(testLabel);
    // * #TEST: ASSERT
    expect(label).toHaveTextContent(testLabel);
    expect(container).toMatchSnapshot();
  });

  it("should render undefined label as ''", () => {
    // * #TEST: ARRANGE
    const strange = render(<TestWrapper labelText={undefined} />, {});
    const common = render(<TestWrapper labelText="" />, {});

    // * #TEST: ASSERT
    expect(strange.container).toEqual(common.container);
    expect(strange.container).toMatchSnapshot();
    expect(common.container).toMatchSnapshot();
  });
});
