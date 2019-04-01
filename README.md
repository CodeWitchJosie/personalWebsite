##Jocelyn's Personal Site
My personal website.  Using it to provide experience and code samples since most of my professional experience isn't publicly available.  Until that site is ready for production, have a silly website with my picture and puppy countdown.

## Features

- Gatsby v2 + TypeScript
- MobX with decorators
- `.editorconfig` & Prettier
- TSLint
- Jest setup

## Usage

1. Make sure you're in a Linux-y shell (on Windows, use e.g. Git Bash or MSYS2; `rm -rf` and similar might be called from npm scripts).
2. `yarn`
3. `yarn start`

Other notable scripts (see [`package.json`](package.json)):

- `yarn build`
    - (You can verify the statically generated site with e.g. `npx local-web-server -d public`.)
- `yarn tsc`
- `yarn lint`
- `yarn prettier`
- `yarn test` or `yarn test --watch`
