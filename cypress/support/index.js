// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import "./commands";

// https://www.cypress.io/blog/2021/05/19/cypress-x-storybook-2-0/
// Module not found error
// You can either move it inside src/, or add a symlink to it from project's node_modules/.
import { setGlobalConfig } from "@storybook/testing-react";
// import * as sbPreview from "../../.storybook/preview";

setGlobalConfig({});
