# Testing notes

## Environment variables

Our code uses the NODE_ENV var to define code blocks that should be executed in specific environments, like
`'test'` or `'production'`.

For example:

```js
if (process.env.NODE_ENV !== 'test') {
  // this will only be executed if not inside a test
}
```

Make sure your bundler (webpack, rollup, parcel, etc) makes the correct substitutions and the minifier
effectively removes unused code.

## Acceptance tests

To change some behaviors to facilitate acceptance tests (tests that run in a browser), a helper function is
used.

`isRunningAcceptanceTest` returns true if the user agent includes the `'acceptance-test'` string.

To make this work in your test environment, you should add that string to the browser's user agent. For
example in `Puppeteer`:

```js
await page.setUserAgent(`${currentUserAgent} acceptance-test`);
```

## Questions?

Don't hesistate to ask at
[Kenos Teams Channel]()
