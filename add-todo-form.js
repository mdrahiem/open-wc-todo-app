import { LitElement, html, css } from 'https://unpkg.com/lit-element?module';

class AddTodoForm extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return css`
      .inputField{
        margin: 20px 0;
        width: 100%;
        display: flex;
        height: 45px;
      }
      .inputField input{
        width: 85%;
        height: 100%;
        outline: none;
        border-radius: 3px;
        border: 1px solid #ccc;
        font-size: 17px;
        padding-left: 15px;
        transition: all 0.3s ease;
      }
      .inputField input:focus{
        border-color: #8E49E8;
      }
      .inputField button{
        width: 50px;
        height: 100%;
        border: none;
        color: #fff;
        margin-left: 5px;
        font-size: 21px;
        outline: none;
        background: #8E49E8;
        cursor: pointer;
        border-radius: 3px;
        opacity: 0.6;
        transition: all 0.3s ease;
      }
      .inputField button:hover,
      .footer button:hover{
        background: #721ce3;
      }
      .inputField button.active{
        opacity: 1;
        pointer-events: auto;
      }
    `;
  }


  _addTodo(e) {
    if (e) {
      e.preventDefault();
    }
    const input = this.shadowRoot.getElementById('addTodoInput');
    const text = input.value;
    input.value = '';
    this.dispatchEvent(new CustomEvent('add-todo', { detail: text }));
  }

  render() {
    return html`
      <form class="inputField" @submit="${e => this._addTodo(e)}">
        <input id="addTodoInput" placeholder="Name" />
        <button type="button" @click="${this._addTodo}">Add</button>
      </form>
    `
  }
}

customElements.define('add-todo-form', AddTodoForm);