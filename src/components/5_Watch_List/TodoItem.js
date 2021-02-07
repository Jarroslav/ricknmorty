import React, { useCallback, useRef } from 'react';

const TodoItem = ({ todo, id, onRemoveTodo, onToggleTodoDone, onEditTodo, isDone, setCustomError }) => {
    const removeTodoHandler = useCallback(() => onRemoveTodo(id), [id, onRemoveTodo]);

    const toggleTodoDoneHandler = useCallback(() => onToggleTodoDone(id), [id, onToggleTodoDone]);

    const editTodoHandler = useCallback(event => {
        if (event.keyCode === 13) { // Detect ENTER key down
            event.preventDefault(); // Prevent adding a new line because it's supposed to be single line

            const { value } = event.target;

            if (value.length < 3) {
                setCustomError('Todo text is too short.');

                return;
            }

            if (value.length > 20) {
                setCustomError('Todo text is too long.');

                return;
            }

            onEditTodo(id, event.target.value);

            setCustomError(null) // Reset customError

            event.target.blur(); // Make the current input lost focus after finishing onEditTodo
        }
    }, [id, onEditTodo, setCustomError]);

    const checkboxRef = useRef(null);

    return (
        <li className="watchlist-item">
            <input
                id="isWatched"
                type="checkbox"
                ref={checkboxRef}
                checked={!!isDone}
                onChange={toggleTodoDoneHandler}
                className="watchlist-item__checkbox"
            />
            <span onClick={() => checkboxRef.current.click()}  />
            <input
                type="text"
                defaultValue={todo} // innerHTML of the editable div
                onKeyDown={editTodoHandler} // handle innerHTML change
                style={{textDecoration: isDone ? 'line-through' : 'none'}}
                className="watchlist-item__text"
            />
            <button onClick={removeTodoHandler} className="watchlist-item__delete-button">
                <span role="img" aria-labelledby="trash" />🗑️
            </button>
        </li>
    )
};

export default React.memo(TodoItem);