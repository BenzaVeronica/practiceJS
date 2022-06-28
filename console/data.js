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
];
