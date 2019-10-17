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
  submitInvite: (fullName,email ) => void,
  loading: boolean
  onBack: void
  };


