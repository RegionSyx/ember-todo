# Objectives
 - Aggregate all "notifications" from various sources.
 - Allow basic actions to be executed against outstanding todo items
 - Inspire action on todo items, rather than passive "waiting"
 - Inspired by Google's Inbox

# Definitions

### TODO
  - Represents a "Thing" to be done, e.g.
    - JIRA Ticket
    - GitHub Pull Request
    - Slack DM
  - Does not contain the thing, but is a reference to it in the 3rd party system
- CANNOT be changed directly, only through a defined `Action`
- HAS a "state" indicating general todo state of item.
  - NEXT
    - is ready to be started
  - WAITING
    - cannot be started due to blocking external factors
  - DONE
    - needs no more action

### Action
  - Represents something to be done to a TODO.
  - Examples
    - Merge a GitHub Pull Request
    - Mark a JIRA ticket as 'Done'
    - Respond to a Slack DM

# Specifications
## User Interface
### Front Page
 - MUST have single page with ALL releavent notifications
    - MUST callout higher priority items.
    - MUST be able to act on items with most common actions
    - MUST display actions specific to todo item type
    - MUST link to more detailed view of todo item
 - MUST be able to quickly create a todo item.
    - WILL create within 3rd party systems
    - SHOULD only ask for minimal set of information needed to create
    
### TODO Detail
  - MUST show ALL available information about specific TODO item
  - MUST show ALL available actions about specific TODO item
    
### Settings
  - MUST show a list of available integrations
  - MUST be able to connect to 3rd party accounts
  - MUST be able to disconnect to connected accounts
  - MUST show any additional options for a specific 3rd party integration

# Modules
 - Core (TODOS)
 - Integrations
     - GitHub
     - Jira
     - Slack
 - Active TODO
 - Analytics
