function PositiveOrNegative(nums) {
    let cnt = 0;
    let ifTrue = false;
    for (let i = 0; i < 3; i++)
        {
        if (nums[i] < 0)
        {
            cnt++;
        }
        if (nums[i] == 0)
        {
            ifTrue = true;
        }
        }
        if ((cnt % 2 == 0) || ifTrue)
            {
                return "Positive";
            }
            else
        {
            return "Negative";
        }
}