## React

- "presentational components" are concerned with how things look (markup, styles)
- "container components" are concerned with how things work (data fetching, state updates)
- "higher-order components" are functions that take a component and return a new component


## Flux (Redux)

- "actions" describe the fact that something happened
- "actions" represent the facts about "what happened"
- "reducers" describe how the application's state changes in response to actions
- "reducers" update the state according to actions
- "reducers" compute the next state
- "root reducer" combines the output of multiple reducers into a single state tree
- "store" passes the current state tree and any dispatched action to the root reducer
- "store" saves the complete state tree returned by the root reducer


### Rules

- reducers should be pure
- reducers should NOT mutate arguments
- reducers should NOT perform side effects like API calls and routing transitions
- reducers should NOT call non-pure functions, e.g. Date.now(), Math.random()
- reducers should return the previous state for unknown actions
- a Redux application has only a single store
- only container components should subscribe to the redux state
- only container components should dispatch actions
- presentational components should read their data from props only


### Patterns

- strict unidirectional data flow
- reducer composition (a way to split the reducers into separate files)


### Best practices

- check out [Flux Standard Action](https://github.com/acdlite/flux-standard-action) for recommendations on how actions could be constructed 
- actions should be the ONLY source of information for the store
- keep the data separate from the UI state
- keep presentational components separate from container components
- keep your state as normalized as possible, without any nesting


### Naming conventions

- Upper camel case for component file names
- Upper camel case for named default exports in component files.
- file name "index" for entry points and composition roots (e.g. root reducer)
- naming composable reducers after their corresponding state property


## Development workflow

Logic:

- Design actions
- Design shape of state tree
- Implement and compose reducers
- Write tests

UI:

- Design Component Hierarchy
- Implement presentational components
- Write (snapshot) tests if appropriate

Glue:

- Design Container Components
- Implement "mapStateToProps" and/or "mapDispatchToProps" functions and generate container components using react-redux's "connect" function


## Abbreviations

- HOC = Higher-Order Component
- FSA = Flux Standard Action


## IDE and tools

### Sublime Text 3

- install "Babel" plugin for JSX/Babel syntax highlighting
- install "SublimeLinter" and "SublimeLinter-contrib-eslint" plugin to display lint output in Sublime
- add "*/node_modules/*" to SublimeLinter's "excludes" option for eslint
- consider "Babel Snippets" package (auto completion for common React functions)

### Chrome

- install React Developer Tools Extension (component/prop inspection, update tracing, etc.)
- install Redux DevTools Extension (action/state inspection, time travalling, state import/export, test generation etc.)


## Additionally installed dependencies

- eslint related packages required for IDE integrated linting: "eslint", "babel-eslint", "eslint-plugin-flowtype", "eslint-plugin-import", "eslint-plugin-jsx-a11y", "eslint-plugin-react" (installed as dev dependency)
