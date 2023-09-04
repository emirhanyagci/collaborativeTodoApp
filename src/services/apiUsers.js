import supabase from "./supabase";
import store from "../store/store";
export async function initializeUser(userId) {
  const { data, error } = await supabase
    .from("users")
    .insert([{ userId, todos: [], friendsId: [] }])
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
  console.log(JSON.parse(data.todos));
  const { data2, error } = await supabase
    .from("users")
    .update({ todos: updatedTodos })
    .eq("userId", userId)
    .select();
  console.log(data2, error);
}

export async function getTodos(userId) {
  const { data } = await supabase
    .from("users")
    .select("todos")
    .eq("userId", userId)
    .single();
  console.log(JSON.parse(data));
  return JSON.parse(data);
}
