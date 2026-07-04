react note:
# practice code spliting.

# when the json file is in public folder, we can access them by "/file_name"

#2 promise handlers:
fetch() returns a Promise.
async/await is one way to handle that Promise.
use() is another way for React to read a Promise (in supported React 19 patterns).

So use() is not a replacement for async/await. It's a different React mechanism for consuming Promises.

#toggling: we recall 3 things in togging. 
1. useState ex: (store and update the value)
2. conditional rendering. ex:(if ? true : false)
3. onClick handler. ex: (()=>setToggle(false))