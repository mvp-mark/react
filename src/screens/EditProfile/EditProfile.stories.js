import React from "react";
import { EditUser as EditDumb } from "./dumb";
import EditEnhanced from "./enhanced";
import { action } from "@storybook/addon-actions";


export default {
  title: "Edit Profile"
};

export const InvitedUserDumb = () => (
    <EditDumb
    userId="jamaisconsiguravencerograndenappa"
    onBack={action("onBack")}
    changeEmail={action("changeEmail")}
    changeFullName={action("changeFullName")}
    fullName="Fulano de T"
    email="fulano@detal.co"
    loading={false}
    submitEdit={action("submitEdit")}
  />

);
  export const DefaultDumb_Saving = () => (
    <EditDumb
      userId="jamaisconsiguravencerograndenappa"
      onBack={action("onBack")}
      changeEmail={action("changeEmail")}
      changeFullName={action("changeFullName")}
      fullName="Fulano de T"
      email="fulano@detal.co"
      loading={true}
      submitEdit={action("submitEdit")}
    />
  );

  
  export const Default_Enhanced = () => (
    <EditEnhanced
      submitInvite={action("submitEdit")}
      loading={false}
      onBack={action("onBack")}
    />
  );
  