import Todo from "./Todo";
const TodosList = ({ todos, isManageable = false }) => {
  return (
    <ul className="space-y-3">
      {todos?.map((todo, index) => (
        <Todo key={index} isManageable={isManageable}>
          {todo}
        </Todo>
      ))}
    </ul>
  );
};

export default TodosList;
