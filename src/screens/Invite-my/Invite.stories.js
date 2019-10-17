import React from "react";
import { InviteUser } from "./dumb";

export default {
  title: "Invited User"
};

export const InvitedUserDumb = () => {
  return (
    <InviteUser
    fullName="Marcus Vinícius Peixoto Paulo"
    email="Email.com@ymail.com"
      loading={true}
    />
  )
};