import supabase from "./supabase";
import store from "../store/store";
export async function initializeUser(email, userId) {
  const { data, error } = await supabase
    .from("users")
    .insert([{ email, userId, todos: [], friendsId: [] }])
    .select();
  console.log(data, error);
}

export async function addTodo(todo) {
  const userId = store.getState().user.id;
  const { data } = await supabase
    .from("users")
    .select("todos")
    .eq("userId", userId)
    .single();
  console.log(userId);
  const updatedTodos = [...JSON.parse(data?.todos), todo];
  const { data2, error } = await supabase
    .from("users")
    .update({ todos: updatedTodos })
    .eq("userId", userId)
    .select();
}

export async function getTodos(userId) {
  const { data } = await supabase
    .from("users")
    .select("todos")
    .eq("userId", userId)
    .single();
  return JSON.parse(data.todos);
}
export async function getEmail(userId) {
  const { data } = await supabase
    .from("users")
    .select("email")
    .eq("userId", userId)
    .single();
  return data.email;
}
export async function getFriendsId() {
  const userId = store.getState().user.id;
  const { data } = await supabase
    .from("users")
    .select("friendsId")
    .eq("userId", userId)
    .single();

  return JSON.parse(data.friendsId);
}
export async function getUsers() {
  let { data: users } = await supabase.from("users").select("email,userId");
  return users;
}
export async function addFriend(friendId) {
  const userId = store.getState().user.id;
  const { data } = await supabase
    .from("users")
    .select("friendsId")
    .eq("userId", userId)
    .single();

  const updatedFriendsId = [...JSON.parse(data?.friendsId), friendId];
  console.log(updatedFriendsId);
  await supabase
    .from("users")
    .update({ friendsId: updatedFriendsId })
    .eq("userId", userId)
    .select();
}
