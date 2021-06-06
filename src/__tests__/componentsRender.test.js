import React from "react";
import { create } from "react-test-renderer";
import "@testing-library/jest-dom";
import Card from "../game/Card/Card";
//import { render } from "@testing-library/react";


// tests that the <Komponent /> component renders without any problem (describe)
describe("My first snapshot test", () => {
  test("testing if the <Card /> component works", () => {
    let tree = create(<Card faceUp="false" flip="false" content="" />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});

// test a custom  Component, if it renders without any problem -> everything renders (test)
/* test("<Komponent /> matches snapshot", () => {
  const component = render(
    <>
      <Title>Online Umfragen</Title>
      <ul style={{ marginTop: "25vh" }}>
        {[
          "Erstelle einen Fragebogen mit einem benutzerfreundlichen und einfach verständlichen Umfragetool.",
          "Einfach verständliche Analyse von Umfrageergebnissen.",
          "Answerium, da oft Fragen auftauchen!",
        ].map((entry, i) => {
          return (
            <li className="my-3" key={i}>
              <p className="lead">{entry}</p>
            </li>
          );
        })}
      </ul>
      <Button href="/selectPath" variant="primary" className="my-3">
        Jetzt kostenlos starten!
      </Button>
    </>
  );

  expect(component.container).toMatchSnapshot();
}); */

// now let's test if the component renders without crashing
// we do the same thing as react, we pass the elements into a div and render it
// if a component doesn't render, then the test will fail and we know that our code crashes

/* test("<Komponent /> renders without crashing", () => {
  const div = document.createElement("div");
  render(
    <>
      <Title>Online Umfragen Mocjup</Title>
      <ul>
        {["one", "two"].map((entry, i) => {
          return (
            <li className="my-3" key={i}>
              <p className="lead">{entry}</p>
            </li>
          );
        })}
      </ul>
      <Button href="/selectPath" variant="primary" className="my-3">
        Jetzt kostenlos starten!
      </Button>
    </>,
    div
  );
}); */


// Ideen für Tests (werden auch in der Semestersdatei PDF dokumentiert werden)

/*

1. Tests für jedes Komponent, ob es erfolgreich gerendet werden kann oder nicht.
2. Ob die Anzahl der Karten je nach Schwierigkeit korrekt sind
3. ob die Coins korrekt berechnet werden
4. ob eine Karte nach dem Anklicken geflippt wird
5. Funktionalität des routings? 

*/