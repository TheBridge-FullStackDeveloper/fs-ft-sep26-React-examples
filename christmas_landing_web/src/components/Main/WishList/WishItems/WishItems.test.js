import React from "react";
import { shallow } from "enzyme";
import WishItems from "./WishItems";

describe("WishItems", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<WishItems />);
    expect(wrapper).toMatchSnapshot();
  });
});
