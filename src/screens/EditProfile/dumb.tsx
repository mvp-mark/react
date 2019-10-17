import React from "react";

import {
  EditProfileDumbProps,
  EditProfileComponent
} from "./types";
import Layout from "../../components/Layout/enhanced";
import {
  TextField,
  CircularProgress,
  Button
} from "@material-ui/core";
import { UserId } from "../UserId/dumb";

export const EditUser: EditProfileComponent = ({
  userId,
  onBack,
  fullName,
  changeFullName,
  email,
  changeEmail,
  loading,
  submitEdit
}) => {
  return (
    <Layout
      title="Editar Perfil"
      subtitle="pls funciona"
      onBack={onBack}
    >
      <div>
        <TextField
          label="Nome Completo"
          value={fullName}
          onChange={evt =>
            changeFullName(evt.target.value)
          }
          fullWidth
        />
        <TextField
          label="Email"
          value={email}
          onChange={evt => changeEmail(evt.target.value)}
          fullWidth
        />
        {!loading && (
          <Button
            value={email}
            onClick={()=>  submitEdit({ id: userId, fullName, email })
            }
          >
            Editar Perfil
          </Button>
        )}
        {!!loading && <CircularProgress size={30} />}
      </div>
    </Layout>
  );
};
