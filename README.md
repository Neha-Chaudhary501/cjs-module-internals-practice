---------------------------------------------------------------------What I Learned Today---------------------------------------------------------------------------------------
1. Module Syntax (The Basics)
----Importing: Using require('./path').

----Exporting: Using module.exports for single functions or objects.

----Destructuring: Cleanly pulling specific properties from an exported object.

----Square Notation: Accessing module exports dynamically.
---------------------------------------------------------------------
2. File Resolution Priority
When you require('./utils/file'), Node.js searches in this specific order:

.js file: Searches for file.js.

.json file: If no .js, it looks for file.json.

Folder Strategy: If no file is found, it looks for a folder named file/ and tries to find an index.js inside it.
------------------------------------------------------------------------
3. Internal Caching & Snapshots
This is the most important part of today's learning. CommonJS caches modules after the first time they are loaded.

Primitive Data Types (Snapshot): Primitives (numbers, strings) are passed by value. Once exported, they act like a "snapshot." Changing the value in the source file won't update it in the required file.

Objects & Arrays (Reference): These are passed by reference. Since they point to the same memory location, changes made in one file will be reflected in the other.
--------------------------------------------------------------------------
Code Examples
In this repo, I have implemented:

----A counter.js to demonstrate the Snapshot vs. Reference behavior.

----A nested folder structure to test the Resolution Priority.

Examples of module.exports vs exports.
