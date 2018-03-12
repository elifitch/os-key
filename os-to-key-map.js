export default const osToKeyMap = {
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
    primaryMeta: false
  },
  linux: {
    os: 'Linux',
    primaryMeta: false
  }
}