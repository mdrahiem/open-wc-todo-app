✨Author: Rahimuddin✨

# Todo App

## This is a simple Todo App using Open web components and LitElement


## Key points

- When we define `todos` as property (static get properties) then it LitElement creates something like `Set` and `Get` for that property so that it observes what changes have been made to that property. It's like state in React.

- We need to follow immutable patterns while modifying arrays or objects so that LitElement would know that a new array or object has bee created.