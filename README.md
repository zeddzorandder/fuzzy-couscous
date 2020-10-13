# fuzzy-couscous

Just messing around with canvass.
Currently, in the Logic class, you can add in the constructor graphics entities and add behavior entities 
to them to get them to behave in a certain way.

This is, of course, horrible. And i'm trying to figure out a better solution. But it gets worse.
The entities are actually stored in the renderer. Why? Well, i couldn't get something to stick early on,
so that's how i rigged it. This needs to be fixed immediately as it enrages me endlessly.

Second order of business will be to make a child-parent system for the entities so complex entities can be made.

//TODO: 
    2. Make all entities have an ID, and a way to find them by that id.
    3. Add the ability to make complex entities. Each entity can have multiple child entities that are tied to 
    
Done:
Fixed the issue with the entitiy list being stuck in the renderer.
Added ability to time execution of of code within the individual behaviors of entities. I'm not particularly
proud of the solution, but at least it works.