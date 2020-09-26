import React from "react";
import { mount, shallow } from "enzyme";
import App from "../client/src/components/App.jsx";

describe("<App />", () => {
  it("assert checked", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("#picture")).toExist();
    expect(wrapper.find("#rate")).toExist();
    // expect(wrapper.find("#not")).not.toBeChecked();
  });
});
