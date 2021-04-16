import React, { FC } from "react";
import { render, cleanup } from "@/tests/test-utils";

import { BasicShowBox, BasicShowBoxProps } from "..";

describe("<BasicShowBox />", () => {
  afterEach(cleanup);

  const testLabel = "TEST";
  const TestWrapper: FC<Partial<BasicShowBoxProps>> = () => {
    return <BasicShowBox text={testLabel} />;
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
    const strange = render(<TestWrapper text={undefined} />, {});
    const common = render(<TestWrapper text="" />, {});

    // * #TEST: ASSERT
    expect(strange.container).toEqual(common.container);
    expect(strange.container).toMatchSnapshot();
    expect(common.container).toMatchSnapshot();
  });
});
