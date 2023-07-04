export default function cleanSet(set, startString) {
  const length = startString.length;
  const result = [];
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      result.push(value.slice(length));
    }
  });
  return result.join('-');
}
