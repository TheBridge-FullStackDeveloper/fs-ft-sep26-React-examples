import React from "react";
import { shallow } from "enzyme";
import WishCard from "./WishCard";

describe("WishCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<WishCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
