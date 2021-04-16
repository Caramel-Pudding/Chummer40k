import React, { FC, useState } from "react";
import { render, cleanup } from "@/tests/test-utils";

import { BasicCheckbox, BasicCheckboxProps } from "..";
import { BasicCheckboxTestIds } from "../consts";

describe("<BasicCheckbox/>", () => {
  afterEach(cleanup);

  const testLabel = "TEST";
  const TestWrapper: FC<Partial<BasicCheckboxProps>> = ({
    checked = false,
  }) => {
    const [isChecked, setIsChecked] = useState(checked);

    return (
      <BasicCheckbox
        checked={isChecked}
        handler={setIsChecked}
        labelText={testLabel}
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

  it("should turn on by click", () => {
    // * #TEST: ARRANGE
    const { container, getByTestId } = render(
      <TestWrapper checked={false} />,
      {}
    );
    const checkbox: HTMLInputElement = getByTestId(
      BasicCheckboxTestIds.checkbox
    ) as HTMLInputElement;

    expect(checkbox.checked).toEqual(false);
    expect(container).toMatchSnapshot();

    // * #TEST: ACT
    checkbox.click();

    // * #TEST: ASSERT
    expect(checkbox.checked).toEqual(true);
    expect(container).toMatchSnapshot();
  });

  it("should turn off by click", () => {
    // * #TEST: ARRANGE
    const { container, getByTestId } = render(<TestWrapper checked />, {});
    const checkbox: HTMLInputElement = getByTestId(
      BasicCheckboxTestIds.checkbox
    ) as HTMLInputElement;

    expect(checkbox.checked).toEqual(true);
    expect(container).toMatchSnapshot();

    // * #TEST: ACT
    checkbox.click();

    // * #TEST: ASSERT
    expect(checkbox.checked).toEqual(false);
    expect(container).toMatchSnapshot();
  });
});
