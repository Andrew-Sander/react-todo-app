const TodoItem = ({ itemProp, setTodos }) => {
    return (
        <li>
            <input 
                type="checkbox" 
                check={itemProp.completed}
                onChange={() => console.log('clicked')}
            />
            {itemProp.title}
        </li>
    );
};
export default TodoItem;