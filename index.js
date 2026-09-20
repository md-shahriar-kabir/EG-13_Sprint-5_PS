// 01. Remove Duplicates from Sorted Array
/**
* @param {number[]} nums
* @return {number}
*/
var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;

    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};



// 02. Binary Search
/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
};



// 03. Search Insert Position
/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
};



// 04. Maximum Depth of Binary Tree
/**
* @param {TreeNode} root
* @return {number}
*/
var maxDepth = function (root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};



// 05. Invert Binary Tree
/**
* @param {TreeNode} root
* @return {TreeNode}
*/
var invertTree = function (root) {
    if (!root) return null;
    const left = invertTree(root.left);
    const right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
};



// 06. Product of Array Except Self
/**
* @param {number[]} nums
* @return {number[]}
*/
var productExceptSelf = function (nums) {
    const n = nums.length;
    const answer = new Array(n);

    answer[0] = 1;
    for (let i = 1; i < n; i++) {
        answer[i] = answer[i - 1] * nums[i - 1];
    }

    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] = answer[i] * rightProduct;
        rightProduct *= nums[i];
    }

    return answer;
};

