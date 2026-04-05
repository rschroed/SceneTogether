# Product Foundation

## Product wedge

SceneTogether is not a chat app. It is a structured decision surface that helps a small group answer:

> Which movie should we go see, and when?

## v1 product boundary

The initial scaffold encodes these constraints:

- link-based group access
- no full account system
- no in-app chat
- no recommendation engine
- no ticket purchasing
- no calendar integration

## Core entities

### Group

- small, existing social circle
- shared access via link
- lightweight member identity

### Movie candidate

- a movie under consideration by the group
- carries explicit interest signals from each member

### Active plan

- proposed movie
- lightweight time
- member confirmations
- transitions from proposed to locked when everyone confirms

### Activity context

- structured history of actions that move the group toward a decision
- not a freeform chat stream

## Product north star

Every feature should help a group move through:

1. clear options
2. visible intent
3. easy convergence
