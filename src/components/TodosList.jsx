import Todo from "./Todo";
const TodosList = ({ todos, isManageable = false }) => {
  return (
    <ul className="space-y-3">
      {todos?.length > 0
        ? todos?.map((todo, index) => (
            <Todo key={index} isManageable={isManageable}>
              {todo}
            </Todo>
          ))
        : "There is no todo yet"}
    </ul>
  );
};

export default TodosList;
