import React from "react";
import About from "../components/About/index.js";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import toJson from 'enzyme-to-json';
import { Icon } from "../components/About/AboutElements.js";

configure({ adapter: new Adapter() });

// Testing area

it("renders About page without crashing", () => {
  shallow(<About />);
});

it("renders About header", () => {
  const wrapper = shallow(<About />);
  const welcome = <Icon>About this game</Icon>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

it("about component renders correctly", () => {
  const tree = shallow(<About />);
  expect(toJson(tree)).toMatchSnapshot();
});