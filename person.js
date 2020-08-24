export function lordify (firstName, land) {
  if (!firstName) {
    throw new Error('A first name is required')
  }
  if (!land) {
    throw new Error('A lord must have a land')
  }
  return `${firstName} of ${land}`
}
