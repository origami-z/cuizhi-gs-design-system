import * as React from "react";
import { composeStories } from "@storybook/testing-react";
import { mount } from "@cypress/react";
import * as stories from "./Button.stories";

const { AllButtons } = composeStories(stories);

// Cypress component testing, `yarn cypress-ct`
it("renders button", () => {
  // and mount the story using @cypress/react library
  mount(<AllButtons />);

  cy.get("button")
    .findByText(/primary/i)
    .should("exist");
});
