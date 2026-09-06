class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        
        let res = 0;
        for (let i = 0; i < nums.length; i++) {
            let cnt = 0;
            for (let j = i; j < nums.length; j++) {
                if (nums[j] === 0) break;
                cnt++;
            }
            res = Math.max(res, cnt);
        }
        return res;
    }
}