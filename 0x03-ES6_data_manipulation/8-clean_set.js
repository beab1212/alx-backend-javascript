export default function cleanSet(set, startString) {
  const length = startString.length;
  const result = [];
  if (startString === '') {
    return result.join('-');
  }
  for (const val of set) {
    if (val.startsWith(startString))
      result.push(val.slice(length))
  }
  return result.join('-');
}
