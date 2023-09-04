import supabase from "./supabase";
import { initializeUser } from "./apiUsers";
export function signUp(email, password) {
  return new Promise((resolve) => {
    supabase.auth
      .signUp({
        email,
        password,
      })
      .then(({ data, error }) => {
        initializeUser(data.user.email, data.user.id);
        resolve({ data, error });
      });
  });
}
export function signIn(email, password) {
  return supabase.auth.signInWithPassword({
    email,
    password,
  });
}
