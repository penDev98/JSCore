function sumLastKNumbersSequence(n, k) {
    let seq = [1];
    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        let end = i - 1;
        seq[i] = 0;
        for(let j = start; j <= end; j++){
            seq[i] += seq[j];
        }
    }
    console.log(seq.join(' '));
}
