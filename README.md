# Token Authentication Playground
Some small experiments with token-based authentication and JWTs

_________

These are some small experiments with token-based authentication, specifically related to single-page apps.  

I will be starting by working through the tutorial at https://auth0.com/blog/2014/01/07/angularjs-authentication-with-cookies-vs-token/

__________

# Update

_(These notes more for future Dan than the general public, but you can feel free to read them)_

I was able to successfully implement token-based auth for api routes.  When a user successfully logs in, the server sends back a token which is stored in the browser's session storage.  This token can then be sent back via ajax to authenticate further api requests.

From what I understand, storing tokens in the browser's session storage may not be all that secure.  This was done only for the purposes of testing, as chrome does weird things with cookies on localhost domains.  In production it would probably be better to store tokens in a cookie, as they have some built-in security.

At this point it's unclear to me how to send tokens with client requests that come from `<a>` tags, as there's no way to manually set the headers.  This isn't a huge issue in single-page apps, but adds another layer of complexity if you want to navigate to new pages.

This was tested with postman, logging in via `/users/login` and posting new messages to `/message`.
