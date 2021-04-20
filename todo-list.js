import { LitElement, html, css } from 'https://unpkg.com/lit-element?module';

class TodoList extends LitElement {
  static get properties() {
    return {
      todos: { type: Array }
    }
  }

  static get styles() {
    return css`
    .todoList {
      max-height: 250px;
      overflow-y: auto;
      margin: 0;
      padding: 0
    }
    .todoList li {
      position: relative;
      list-style: none;
      height: 45px;
      line-height: 45px;
      margin-bottom: 8px;
      background: #f2f2f2;
      border-radius: 3px;
      padding: 0 15px;
      cursor: default;
      overflow: hidden;
      list-style-position: inside;
    }
    .todoList li .icon {
      position: absolute;
      right: 0;
      border: 0;
      top: 12px;
      width: 45px;
      text-align: center;
      color: #fff;
      border-radius: 0 3px 3px 0;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .todoList li:hover .icon {
      right: 0px;
    }
    `;
  }

  _changeTodoFinished(e, changedTodo) {
    const eventDetails = { changedTodo, finished: e.target.checked };
    this.dispatchEvent(new CustomEvent('change-todo-finished', { detail: eventDetails }));
  }

  _removeTodo(item) {
    this.dispatchEvent(new CustomEvent('remove-todo', { detail: item }));
  }

  render() {
    if (!this.todos) {
      return html``;
    }
    return html`
      <ul class="todoList">
        ${this.todos.map(
          todo => html`
            <li>
              <input
                type="checkbox"
                .checked=${todo.finished}
                @change=${e => this._changeTodoFinished(e, todo)}
              />
              ${todo.text}
              <button class="icon" @click=${() => this._removeTodo(todo)}>
              ⛔
              </button>
            </li>
          `,
        )}
      </ol>
    `;
  }
}

customElements.define('todo-list', TodoList);