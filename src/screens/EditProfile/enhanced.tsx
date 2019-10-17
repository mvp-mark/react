import {
  EditProfileDumbProps,
  EditProfileEnhancedProps,
  EnhancerFunciton
} from "./types";
import { BehaviorSubject, combineLatest } from "rxjs";
import { map } from "rxjs/operators";
import { mapPropsStream } from "recompose";
import { EditUser } from "./dumb";

const enhancer: EnhancerFunciton = prop$ => {
  const ui = {
    fullName$: new BehaviorSubject(""),
    email$: new BehaviorSubject("")
  };

  return combineLatest(prop$, ui.fullName$, ui.email$).pipe(
    map(([props, fullName, email]) => {
      return {
        ...props,
        fullName,
        changeFullName: value => ui.fullName$.next(value),
        email,
        changeEmail: value => ui.email$.next(value)
      } as EditProfileDumbProps;
    })
  );
};

export default mapPropsStream<
  EditProfileDumbProps,
  EditProfileEnhancedProps
>(enhancer)(EditUser);
