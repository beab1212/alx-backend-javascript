export default function getListStudentIds(arg) {
  if (Array.isArray(arg)) {
    return arg.map((value) => value.id);
  }
  return [];
}
