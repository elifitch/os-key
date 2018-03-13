const baseCtrl = {
  name: 'Control',
  abbreviation: 'Ctrl',
  symbol: '^'
};
const baseAlt = {
  name: 'Alt',
  abbreviation: 'Alt',
  symbol: ''
};
const windowsKey = {
  name: 'Windows Key',
  abbreviation: 'Win',
  symbol: '⊞'
};

const osToKeyMap = {
  macOS: {
    os: 'Mac OS',
    primaryMeta: true,
    meta: {
      name: 'Command',
      abbreviation: 'Cmd',
      symbol: '⌘'
    },
    ctrl: {
      name: 'Control',
      abbreviation: 'Ctrl',
      symbol: '⌃'
    },
    alt: {
      name: 'Option (alt)',
      abbreviation: 'Alt',
      symbol: '⌥'
    }
  },
  windows: {
    os: 'Windows',
    primaryMeta: false,
    meta: windowsKey,
    ctrl: baseCtrl,
    alt: baseAlt
  },
  linux: {
    os: 'Linux',
    primaryMeta: false,
    meta: windowsKey,
    ctrl: baseCtrl,
    alt: baseAlt
  }
}

export default osToKeyMap;