import regexes from './lib/regexes';
import osToKeyMap from './lib/os-to-key-map';

function getOs(userAgentString, osRegexMap) {
  for (let os in osRegexMap) {
    const osRegexes = osRegexMap[os];
    for (let i = 0; i < osRegexes.length; i++) {
      if (!!userAgentString.match(osRegexes[i])) {
        return os;
      }
    }
  }
}

export default function OSKey(userAgentString) {
  const os = getOs(userAgentString, regexes);
  
  if (os) {
    return osToKeyMap[os];
  }
}
