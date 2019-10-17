import React from "react";

import { inviteUserDumb } from "./types";
import { Layout } from "../../components/Layout/dumb";
import { TextField, CircularProgress } from "@material-ui/core";
import { Button } from "react-native";



export const InviteUser = ({
  onBack,
  fullName,
  changingFullName,
  email,
  changingEmail,
  loading,
  submitInvite
}: inviteUserDumb) => {
  return (<Layout title="Convidar Usuario" subtitle="pls funciona" onBack={onBack} />
    ,
    <React.Component>

      <TextField label="Nome Completo" value={fullName} onClick={changingFullName} fullWidth />
      <TextField label="Email" value={email} onClick={changingEmail} fullWidth />
      (&loading){<Button onClick={submitInvite}>
        Enviar
        </Button>}(&&loading){<CircularProgress size={30} />}



    </React.Component>);
};

