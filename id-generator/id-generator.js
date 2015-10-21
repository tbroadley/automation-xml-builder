let __currentID = 0;

export function getNextIDAndIncrement() {
  return __currentID++;
}

export function addIDToObject(obj) {
  return Object.assign({}, obj, { id: __currentID++ });
}
