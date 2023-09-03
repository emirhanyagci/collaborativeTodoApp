import supabase from "./supabase";

export function signUp(email, password) {
  return supabase.auth.signUp({
    email,
    password,
  });
}
export function signIn(email, password) {
  return supabase.auth.signInWithPassword({
    email,
    password,
  });
}
