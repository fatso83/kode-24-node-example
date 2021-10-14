# kode-24-node-example
> Created with CodeSandbox

This demonstrates that a module holds state that is
shared by all its consumers. You should see this
by just cloning this and running `npm start`:

```
$ npm start

> node-example@1.0.0 start
> node src/index.js

index gets the count before anyone: 0
clientA gets state before increment: 0
clientA gets state after increment: 1
clientB gets state before increment: 1
clientB gets state after increment: 2
Index starts incrementing
index gets the count: 5
```
