import React, { useState } from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import toJson from 'enzyme-to-json';

import SetDifficultyPage from '../pages/setDifficultyPage.js';
import { FormH1 } from '../game/Difficulty/DifficultyElements.js';

configure({ adapter: new Adapter() });

// Testing area



it("renders setDifficulty page without crashing", () => {
    shallow(<SetDifficultyPage />);
  });
  
  it("setDifficulty components renders correctly", () => {
    const tree = shallow(<SetDifficultyPage />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  it("renders setDifficulty header and called the state correctly", () => {
    const [playerName, setplayerName] = useState("");
    setplayerName("Theo");
    const wrapper = shallow(<SetDifficultyPage />);
    const welcome = <FormH1>Hello Theo, select the difficulty</FormH1>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });
  