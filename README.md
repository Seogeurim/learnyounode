# LearnYouNode

Node.js basic tutorial **learnyounode** from [NodeSchool](https://nodeschool.io/)

> [https://github.com/workshopper/learnyounode](https://github.com/workshopper/learnyounode)

![complete](./README_img/learnyounode-complete.png)

## 01. HELLO WORLD [🔗](./hello-world.js)

> make Node.js program

### # execute program

- create a new file with a .js extension
- running it with the node command

```bash
$ node hello-world.js
```

## 02. BABY STEPS [🔗](./baby-steps.js)

> access command-line arguments

### # process object : argv property

- `process.argv` : an array containing the complete command-line
- all elements of `process.argv` are strings

```bash
$ node command-line-test.js 1 2 3
```

```js
console.log(process.argv); // ['node', '/path/to/your/command-line-test.js', '1', '2', '3']
```

## 03. MY FIRST I/O! [🔗](./my-first-io.js)

> synchronous filesystem operation

### # fs module (Node core library)

- all synchronous (or blocking) filesystem methods in the fs module end with `Sync`
- `fs.readFileSync('/path/to/file')` : read a file synchronous, returns a Buffer object
  - supply `utf8` as the second argument : returns String instead of a Buffer
- Buffer objects can be converted to strings by calling the `toString()` method

## 04. MY FIRST ASYNC I/O! [🔗](./my-first-async-io.js)

> asynchronous filesystem operation

### # fs module (Node core library) - readFile

- `fs.readFile('/path/to/file', /* callback function */)` : read a file asynchronous
- callback signature : `function callback (err, data) { /* ... */ }`, `data` is a Buffer object
- supply `utf8` as the second argument and put the callback as the third argument : `data` is a String instead of a Buffer
