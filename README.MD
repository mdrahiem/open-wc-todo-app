✨Author: Rahimuddin✨

# Todo App

## This is a simple Todo App using Open web components and LitElement


## Key points

- When we define `todos` as property (static get properties) then it LitElement creates something like `Set` and `Get` for that property so that it observes what changes have been made to that property. It's like state in React.

- We need to follow immutable patterns while modifying arrays or objects so that LitElement would know that a new array or object has bee created.

- Like react we can pass props here using `.` For example, `<todo-list .todos="${this.todos}"></todo-list>`

- To pass an event we can use `@`. For example
```
@click=${() => this._removeTodo(todo)}
@change=${e => this._changeTodoFinished(e, todo)}
```

- We can create separate modules and import those into the parent component using `import`

- For events we can create custom events and dispatch them. For example,
```
_addTodo() {
    const input = this.shadowRoot.getElementById('addTodoInput');
    const text = input.value;
    input.value = '';
    this.dispatchEvent(new CustomEvent('add-todo', { detail: text }));
}
```