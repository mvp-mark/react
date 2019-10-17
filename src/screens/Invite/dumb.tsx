import React from "react";

import {inviteUserDumb} from "./types";
import { Layout } from "../../components/Layout/dumb";
import { TextField } from "@material-ui/core";
import { Button } from "react-native";



export const InviteUser = ({
onBack,
fullName,
changingFullName,
email,
changingEmail,
loading,
submitInvite
}:  inviteUserDumb) =>(
<Layout   onBack={onBack} >
<React.Component>

<TextField
label="Nome Completo"
text={fullName}
onClick={changingFullName}
fullWidth
/>
<TextField
label="Email"
text={email}
onClick={changingEmail}
fullWidth
/>

<Button onClick={submitInvite}>
  Enviar
</Button>



</React.Component>
</Layout>


);