# Weather forecaster

A simple web-app that is built using Javascript and Lit-html to serve the HTML. This was built as part of week 7 of my Codeclan course,
I however decided to take it a bit further and incorporate full ES6 support transpiled with babel with webpack as the builder.

In order to get this application to work, you will have to first get an API key from [APIXU](https://www.apixu.com/)

## Making API key available in app

Once you have acquired an API key, create a new file in the **root** directory named `.env` and from there, paste this in:

```javascript
API_KEY=YOUR-API-KEY;
```

## Building and running

Copy and paste the following into your terminal:

```
npm i && npm run build && npm start
```

Go to `localhost:8080`.

## TODO

* At the time of writing this (29/04/19) I am currently writing (and learning) how to do DOM testing, so I will be writing unit and integration tests for the application.
* ~~Rewrite the way state is handled, it's currently messy. Probably going to use store pattern. Will see how time is.~~ [See commit f0f03c](https://github.com/Gibbo3771/Weather-forecaster/commit/f0f03c42b34064225a6069c5401797e7e76bc586)
