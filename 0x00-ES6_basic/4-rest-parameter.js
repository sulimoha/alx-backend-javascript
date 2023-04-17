export default function returnHowManyArguments(...args) {
  let count = 0;
  for (const arg of args) count += 1; // eslint-disable-line no-unused-vars
  return count;
}
