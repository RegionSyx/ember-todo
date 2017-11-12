# Objectives
 - Aggregate all "notifications" from various sources.
 - Allow basic actions to be executed against outstanding todo items
 - Inspire action on todo items, rather than passive "waiting"
 - Inspired by Google's Inbox

# Definitions
- TODO or TODO item
- Action
- Association

# Specifications
 - Begins as a proposial, and ends up as the manual and internal documentation
 - MUST have single page with ALL releavent notifications
    - MUST be able to act on items with most common actions
    - MUST display actions specific to todo item type
    - MUST link to more detailed view of todo item
 - MUST be able to create a todo item.
    - MUST be able to create within 3rd party systems
    - SHOULD only ask for minimal set of information needed to create
 - Source of truth for todo items MUST be from the source of the todo item
 - MUST be able to associate todo items together with the following
     associations:
     - NEXT
     - MERGE
     - SPLIT
     - RESOLVE
     - IGNORE
     - INIT
     - FORK
 - Associations CAN have many parents
 - Assoications CAN have many children
 - The set of associations CANNOT have any cycles
     - AKA, For every pair of assoications, A and B, A cannot be both an ancestor
         and desendent of B.
 - Associations must be immutable. Once created, they cannot be modified.
 - An association MAY be associated with an action.
 - Actions are specific to todo source.
     - An action applied to a todo produces a set of associatons to apply to
         the todo
 - Associations provide historical context for a set of todos. Associations
     CANNOT represent the current state of todos.
 - MAY have at most one  active todo.
     - CANNOT perform actions on todos while there is an active todo.

# Modules
 - Core (TODOS)
 - Integrations
     - GitHub
     - Jira
     - Slack
 - Active TODO
 - Analytics
