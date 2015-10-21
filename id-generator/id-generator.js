let __currentID = 0;

export function getNextIDAndIncrement() {
  return __currentID++;
}
