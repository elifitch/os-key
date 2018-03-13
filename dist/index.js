var OSKey = (function () {
'use strict';

var regexes = {
  macOS: [
    /(mac\sos\sx)\s?([\w\s\.]+\w)*/i,
    /(macintosh|mac(?=_powerpc)\s)/i
  ],
  windows: [
    /microsoft\s(windows)\s(vista|xp)/i
  ],
  linux: [
    /(mint)[\/\s\(]?(\w+)*/i,
    /(mageia|vectorlinux)[;\s]/i,
    /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,
    /(hurd|linux)\s?([\w\.]+)*/i,
    /(gnu)\s?([\w\.]+)*/i,
    /(cros)\s[\w]+\s([\w\.]+\w)/i, // chromium os
    /(sunos)\s?([\w\.]+\d)*/i, // sun microsystems solaris OS, actually unix but fuck it
    /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, // sun microsystems solaris OS, actually unix but fuck it
    /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i,
    /(haiku)\s(\w+)/i,
    /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, // IBM aix
    /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, // crazy old shit 
    /(unix)\s?([\w\.]+)*/i // lol nothing matters
  ]
};

var baseCtrl = {
  name: 'Control',
  abbreviation: 'Ctrl',
  symbol: '^'
};
var baseAlt = {
  name: 'Alt',
  abbreviation: 'Alt',
  symbol: ''
};
var windowsKey = {
  name: 'Windows Key',
  abbreviation: 'Win',
  symbol: '⊞'
};

var osToKeyMap = {
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
};

function getOs(userAgentString, osRegexMap) {
  for (var os in osRegexMap) {
    var osRegexes = osRegexMap[os];
    for (var i = 0; i < osRegexes.length; i++) {
      if (!!userAgentString.match(osRegexes[i])) {
        return os;
      }
    }
  }
}

function osKey(userAgentString) {
  var os = getOs(userAgentString, regexes);
  
  if (os) {
    return osToKeyMap[os];
  }
}

return osKey;

}());
