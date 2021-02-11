
/**
 * Filters through the elements of an array, and removes the given element.
 * @param arr The array to remove an element from
 * @param what What to remove
 * @returns A new array, consisting of the elements of the given array minus the element to remove.
 */
const removeFromArray = <T>(arr: T[], what: T) => arr.filter(e => e !== what);



export { removeFromArray }