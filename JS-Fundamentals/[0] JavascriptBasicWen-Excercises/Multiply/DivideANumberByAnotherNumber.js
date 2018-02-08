function MultiplyOrDivide(nums) {
    let N = Number (nums[0])
    let X = Number (nums[1])
    if (X >= N)
    {
    return N * X;
    }
    else if (N > X)
    {
    return N / X;
    }
}