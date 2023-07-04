export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer, 0, length);
  try {
    const Int8TypedArray = new Int8Array(buffer);
    Int8TypedArray[position] = value;
  } catch {
    throw new Error('Position outside range');
  }
  return view;
}
