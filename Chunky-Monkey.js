// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
	var arrGroup = [];
	var chunkedArr = [];
	while (arr.length > 0) {
		arrGroup = arr.splice(0,size);
		chunkedArr.push(arrGroup);
	}
	
  return chunkedArr;
}
// examples
chunkArrayInGroups(["a", "b", "c", "d"], 2); //returns [["a", "b"], ["c", "d"]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); // returns [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); // returns [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); // returns [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); // returns [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2); // returns [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); // returns [[0, 1, 2], [3, 4, 5]].