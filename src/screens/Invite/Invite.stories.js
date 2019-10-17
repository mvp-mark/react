import React from "react";
import { action } from "@storybook/addon-actions";

import { InviteUser }  from "./dumb";
import InvitedUserEnhanced from "./enhanced";
import HomeSmart from "./smart";

export default {
  title: "Invited User"
};

export const InvitedUserDumb = () => (
  <InviteUser

  />
);