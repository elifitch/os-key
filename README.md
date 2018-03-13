# OS-KEY ⌨️
Sick of not knowing whether to display ⌘ or Ctrl? ⌥ or Alt? Me too. That's what OS-Key takes care of for ya.

## Usage
Install it
`npm install --save os-key`

Call it
```js
const keys = OSKey(navigator.userAgent);
```

OSKey returns an object that contains information about the special keys of the users operating system
```js
  {
    // Name of the OS
    os: 'Mac OS' || 'Windows' || 'Linux',
    // Whether the meta key is used for primary actions, like copying and pasting. A fun quirk of Mac OS
    primaryMeta: true || false,
    // This library assumes that most linux users are using windows keyboards, and their meta key is the windows key
    meta: {
      name: 'Command' || 'Windows Key',
      abbreviation: 'Cmd' || 'Win',
      symbol: '⌘' || '⊞'
    },
    // Mac OS uses a slightly different symbol for the Ctrl key 
    ctrl: {
      name: 'Control',
      abbreviation: 'Ctrl',
      symbol: '⌃' || '^'
    },
    alt: {
      name: 'Option (alt)' || 'Alt',
      abbreviation: 'Alt',
      symbol: '⌥' || ''
    }
  }
```

If there are no OS Keys, for example, if a user is on IOS, OSKey will return `undefined`

## Example: ⌘+C / Ctrl+C
One of the most common use cases for this library is determining whether to show Ctrl+C or ⌘+C for a `copy` dialogue/tooltip/whatever. This is an example of how you'd use OS-Key to help you with that.
```js
import OSKey from 'os-key';

const keys = OSKey(navigator.userAgent);

let content = '';
if (keys && keys.primaryMeta) {
  // ⌘+C
  content = `${keys.meta.symbol}+C`; 
} else {
  // Ctrl+C
  content = `${keys.ctrl.abbreviation}+C`;
}
```
