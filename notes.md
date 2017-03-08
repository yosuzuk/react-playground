# Notes

## Libraries

### React

...

### Redux

Pro:

- more predictable code
- deterministic view renders
- deterministic state reproduction
- transactional state model and updates
- isolating state management from side effects (user input, network I/O)
- access to the entire state at any given moment (not distributed)
- access to a state history
- easy testability
- easy undo/redo
- eliminates timing dependency bugs
- helps to keep the view as dumb as possible
- tool support for time travel debugging
- tool support for state import/export
- tool support for unit test generation based on state transitions
- tool support for state tracking on failures

Cons:

- writing more code than in other solutions (e.g. compared to MobX)
- requires some caution to avoid direct mutation on the state (if used without immutable.js)
- no best practices for writing composable Redux applications (it's made for one and only one store in mind)
- container components depending on Redux are not reusable by default
- big change in coding style for people that are unfamiliar with functional programming concepts


### MobX

Pro:

- controlled mutation
- intelligent change detection
- performance gain due to minimized reaction
- unobtrusive
- easily integratable into existing applications
- tool support for change analysis
- less code than flux implementations

Cons:

- less predictable than flux implementations


## Terminology

### Components

- "presentational components" are concerned with how things look (markup, styles)
- "container components" are concerned with how things work (data fetching, state updates)
- "higher-order components" (HOCs) are functions that take a component and return a new decorated component
- "functional stateless components" are functions that have no state and return the same markup given the same props


### Basic parts of Flux

- "actions" describe the fact that something happened
- "actions" represent the facts about "what happened"
- "actions" are plain objects containing an action type and optionally some payload
- "action types" are string constants used to identify actions
- "dispatcher" is an emitter for new new actions
- "stores" hold and manage data according to actions that are dispatched
- "stores" have the update logic for your data
- "stores" notify changes
- "views" display data to the end user
- "views" subscribe to stores and update the UI when data change


### The case for Redux

- "store" is the single source of truth regarding state
- "store" holds the entire state tree
- "store" uses a composition of reducers to compute state changes
- "reducers" describe how the application's state changes in response to actions
- "reducers" are pure functions that take the old state, an action and compute a new state
- "reducers" can delegate state subsets to other reducers
- "root reducer" combines the output of all reducers to a complete state tree


### Miscellaneous

- "action creators" are factory functions used to build actions
- "epics" are functions that take a stream of actions and return a stream of actions


### Abbreviations

- HOC = Higher-Order Component
- FSA = Flux Standard Action


## Rules

- reducers should be pure
- reducers should NOT mutate arguments
- reducers should NOT perform side effects like API calls and routing transitions
- reducers should NOT call non-pure functions, e.g. Date.now(), Math.random()
- reducers should return the previous state for unknown actions
- reducer state should always be serializable
- reducer state should not contain functions
- only container components should subscribe to the redux state
- only container components should dispatch actions
- presentational components should read their data from props only
- selectors should be deterministic and free of side-effects
- selectors should only operate on state and constants


## Patterns

- strict unidirectional data flow
- reducer composition (a way to split the reducers into separate files)
- Ducks (proposal for Redux reducer bundles)


## Best practices

General:

- structure code by domain and feature instead of type

React:

- separate smart and dumb components (container components vs functional stateless components)
- name all components (helps debugging)

Redux:

- check out [Flux Standard Action](https://github.com/acdlite/flux-standard-action) (FSA) for recommendations on how actions could be constructed
- actions should be the ONLY source of information for the store
- keep the data separate from the UI state
- keep presentational components separate from container components
- keep your state as normalized as possible, without any nesting
- use action creators to decouple action logic from dispatch callers
- use selectors for calculated state and decoupling


## Naming conventions

React:

- Upper camel case for component file names
- Upper camel case for named default exports in component files.

Redux:

- action name: <NOUN>_<VERB>
- action creator name: <verb><Noun>
- selector name: get<Noun>
- name composable reducers by their corresponding state property


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
