const regexes = {
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

export default regexes;