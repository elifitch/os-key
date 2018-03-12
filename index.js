import regexes from './lib/regexes';

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

export default function osKey(userAgentString) {
  const os = getOs(userAgentString, regexes);
  
  if (os) {

  }
}