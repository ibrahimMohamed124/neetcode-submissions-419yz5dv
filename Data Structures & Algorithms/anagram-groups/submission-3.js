class Solution {
    groupAnagrams(strs) {
        let obj = {};

        for (let i = 0; i < strs.length; i++) {
            let sortedWord = strs[i].split('').sort().join('');

            if (obj[sortedWord]) {
                obj[sortedWord].push(strs[i]);
            } else {
                obj[sortedWord] = [strs[i]];
            }
        }

        return Object.values(obj);
    }
}