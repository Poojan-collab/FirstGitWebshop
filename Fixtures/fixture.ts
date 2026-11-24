import {test as base} from '@playwright/test';
import { RegistrationPage } from '../Pages/RegistrationPage';
import { registerHooks } from '../utils/Hooks';

type MyFixtures = {
    registrationPage: RegistrationPage;

};
export const test = base.extend<MyFixtures>({
  // Define your fixtures her
  registrationPage: async ({ page }, use) => {
    const registrationPage = new RegistrationPage(page);

    await use(registrationPage);

  }
});
registerHooks();
export { expect } from '@playwright/test';