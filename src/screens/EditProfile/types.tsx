import React from "react";
import { Observable } from "rxjs";

export type EditProfileComponent = React.ComponentType<
  EditProfileDumbProps
>;

type EditProfile = {
  id: string;
  fullName: string;
  email: string;
};

export type EditProfileDumbProps = {
  fullName: string;
  changeFullName: (value: string) => void;
  email: string;
  changeEmail: (value: string) => void;
} & EditProfileEnhancedProps;

export type EditProfileEnhancedProps = {
  userId: string;
  submitEdit: (user: EditProfile) => void;
  loading: boolean;
  onBack: () => void;
};

export type EnhancerFunciton = (
  prop$: Observable<EditProfileEnhancedProps>
) => Observable<EditProfileEnhancedProps>;
