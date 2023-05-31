export const LOGIN_TO_USER = "LOGIN_TO_USER";
export const LOGIN_EXİT_USER = "LOGIN_EXİT_USER"

export function loginSuccess(success) {
  return {
    type: LOGIN_TO_USER, 
    payload: success };
}

export function loginExit(){
  return{
    type:LOGIN_EXİT_USER,
 
  }
}