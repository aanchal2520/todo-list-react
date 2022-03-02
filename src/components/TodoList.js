import React from 'react'
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {props.filterTodos.map((todo) => {
                    return <Todo todo={todo} todos={props.todos} setTodos={props.setTodos} key={todo.id} text={todo.text} />
                })}
            </ul>
        </div>
    );
};

export default TodoList;