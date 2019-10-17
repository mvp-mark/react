type inviteUser = {
  fullName: string,
  email: string
};


export type inviteUserDumb = {
fullName:string,
changingFullName: string,
email: string,
changingEmail: string,

}& inviteUserEnhanced;

export type inviteUserEnhanced ={
  submitInvite: (inviteUser:inviteUser ) => void,
  loading: boolean
  onBack: void
  };


