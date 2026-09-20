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



// 07. Rotate Array
/**
* @param {number[]} nums
* @param {number} k
* @return {void}
*/
var rotate = function (nums, k) {
    k = k % nums.length;
    if (k === 0) return;

    const reverse = (start, end) => {
        while (start < end) {
            const temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    };

    reverse(0, nums.length - 1);
    reverse(0, k - 1);
    reverse(k, nums.length - 1);
};



// 08. Min Stack
/**
* @return {void}
*/
var MinStack = function () {
    this.stack = [];
    this.minStack = [];
};

/**
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function (val) {
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
    }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
    const val = this.stack.pop();
    if (val === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

/**
* @return {number}
*/
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1];
};



// 09. Continuous Subarray Sum
/**
* @param {number[]} nums
* @param {number} k
* @return {boolean}
*/
var checkSubarraySum = function (nums, k) {
    const remainderMap = new Map();
    remainderMap.set(0, -1);
    let runningSum = 0;

    for (let i = 0; i < nums.length; i++) {
        runningSum += nums[i];
        let remainder = runningSum % k;
        if (remainder < 0) remainder += Math.abs(k);

        if (remainderMap.has(remainder)) {
            if (i - remainderMap.get(remainder) >= 2) {
                return true;
            }
        } else {
            remainderMap.set(remainder, i);
        }
    }

    return false;
};



// 10. Daily Temperatures
/**
* @param {number[]} temperatures
* @return {number[]}
*/
var dailyTemperatures = function (temperatures) {
    const n = temperatures.length;
    const answer = new Array(n).fill(0);
    const stack = [];

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            answer[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }

    return answer;
};