import supabase from "./supabase";
import store from "../store/store";
export async function initializeUser(email, userId) {
  await supabase
    .from("users")
    .insert([{ email, userId, todos: [], friendsId: [] }])
    .select();
}

export async function addTodo(todo) {
  const userId = store.getState().user.id;
  const { data } = await supabase
    .from("users")
    .select("todos")
    .eq("userId", userId)
    .single();
  const updatedTodos = [...JSON.parse(data?.todos), todo];
  await supabase
    .from("users")
    .update({ todos: updatedTodos })
    .eq("userId", userId)
    .select();
}
export async function deleteTodo(todo) {
  const userId = store.getState().user.id;
  const { data } = await supabase
    .from("users")
    .select("todos")
    .eq("userId", userId)
    .single();
  const duplicatedTodos = JSON.parse(data.todos);
  let updatedTodos = duplicatedTodos.filter((t) => t !== todo);

  await supabase
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
  console.log(data.todos);
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
export async function getFriends() {
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
export async function addFriend(friendId, email) {
  const userId = store.getState().user.id;
  const { data } = await supabase
    .from("users")
    .select("friendsId")
    .eq("userId", userId)
    .single();

  const updatedFriendsId = [
    ...JSON.parse(data?.friendsId),
    { friendId, email },
  ];
  await supabase
    .from("users")
    .update({ friendsId: updatedFriendsId })
    .eq("userId", userId)
    .select();
}
