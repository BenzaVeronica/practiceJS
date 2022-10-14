exports.CONSOLE_TASKS = [
  {
    title: '10_1_RoadsModule',
    description:
      "Write a CommonJS module, based on the example from Chapter 7, that contains the array of roads and exports\n\
the graph data structure representing them as roadGraph. It should depend on a module ./graph,\n\
which exports a function buildGraph that is used to build the graph.\n\
This function expects an array of two-element arrays (the start and end points of the roads).\n\
Since this is a CommonJS module, you have to use require to import the graph module.\n\
That was described as exporting a buildGraph function,\n\
which you can pick out of its interface object with a destructuring const declaration.\n\
To export roadGraph, you add a property to the exports object. Because buildGraph takes a data structure\n\
that doesn't precisely match roads, the splitting of the road strings must happen in your module.",
  },
  {
    title: '11_1_TrackingScalpel',
    description:
      'The village crows own an old scalpel that they occasionally use on special missions—say,\n\
to cut through screen doors or packaging. To be able to quickly track it down,\n\
every time the scalpel is moved to another nest, an entry is added to the storage of both the nest\n\
that had it and the nest that took it, under the name "scalpel", with its new location as the value.\n\
This means that finding the scalpel is a matter of following the breadcrumb trail of storage entries,\n\
until you find a nest where that points at the nest itself.\n\
Write an async function locateScalpel that does this, starting at the nest on which it runs.\n\
You can use the anyStorage function defined earlier to access storage in arbitrary nests.\n\
The scalpel has been going around long enough\n\
that you may assume that every nest has a "scalpel" entry in its data storage.\n\
Next, write the same function again without using async and await.\n\
Do request failures properly show up as rejections of the returned promise in both versions? How?',
  },
  {
    title: '11_2_BuildingPromise',
    description:
      "Given an array of promises, Promise.all returns a promise\n\
that waits for all of the promises in the array to finish. It then succeeds,\n\
yielding an array of result values. If a promise in the array fails, the promise\n\
returned by all fails too, with the failure reason from the failing promise.\n\
Implement something like this yourself as a regular function called Promise_all.\n\
Remember that after a promise has succeeded or failed, it can't succeed or fail again,\n\
and further calls to the functions that resolve it are ignored.\n\
This can simplify the way you handle failure of your promise.",
  },
  {
    title: '20_1_SearchTool',
    description:
      "launch example: node main.js RegEx file1.js file2.js\n\
On Unix systems, there is a command line tool called grep that can be used to quickly search files for a regular expression.\n\
Write a Node script that can be run from the command line and acts somewhat like grep. It treats its first command line argument\n\
as a regular expression and treats any further arguments as files to search. It should output the names of any file whose content matches the regular expression.\n\
When that works, extend it so that when one of the arguments is a directory, it searches through all files in that directory and its subdirectories.\n\
Use asynchronous or synchronous file system functions as you see fit. Setting things up so that multiple asynchronous actions are requested at the same time\n\
might speed things up a little, but not a huge amount, since most file systems can read only one thing at a time.\n\
Your first command line argument, the regular expression, can be found in process.argv[2]. The input files come after that.\n\
You can use the RegExp constructor to go from a string to a regular expression object.\n\
Doing this synchronously, with readFileSync, is more straightforward, but if you use fs.promises again to get promise-returning functions and write an async function,\n\
the code looks similar. To figure out whether something is a directory, you can again use stat (or statSync) and the stats object's isDirectory method.\n\
Exploring a directory is a branching process. You can do it either by using a recursive function or by keeping an array of work (files that still need to be explored).\n\
To find the files in a directory, you can call readdir or readdirSync. The strange capitalization—Node's file system function naming is loosely based on\n\
standard Unix functions, such as readdir, that are all lowercase, but then it adds Sync with a capital letter.\n\
To go from a filename read with readdir to a full path name, you have to combine it with the name of the directory, putting a slash character (/) between them.",
  },
  {
    title: '20_2_DirectoryCreation',
    description:
      'Though the DELETE method in our file server is able to delete directories (using rmdir), the server currently does not provide any way to create a directory.\n\
Add support for the MKCOL method (“make collection”), which should create a directory by calling mkdir from the fs module. MKCOL is not a widely used HTTP method,\n\
but it does exist for this same purpose in the WebDAV standard, which specifies a set of conventions on top of HTTP that make it suitable for creating documents.',
  },
];
