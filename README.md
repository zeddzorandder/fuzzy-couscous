# fuzzy-couscous

Just messing around with canvass.


//TODO: 
    1. Add object pool for instancing/referencing/dereferencing objects
    2. Add the ability to make complex entities. Each entity can have multiple child entities that are tied to 
    3. Begin work on collision
    4. add physics
    5. add render weight
    6. Add ability to save the state of a room
    8. Add Sounds
    9. Add rotation


URGENT:
REWORK ENTITIES!! CLEAN AND REFACTOR EVERYTHING
finish polygons and then completely finish the animation system

DONE:
    added functionality to remove behaviors. You can remove the behavior either by the Id you generate/create or by the internal
    id of the object the function is stored in by passing a second parameter after the entity reference into the removeBehavior
    function. Also you can remove all behaviors because why not.
