const roundFix = (function() {
  let accum = 0;
  return n => {
    let nRounded = accum > 0 ? Math.ceil(n): Math.floor(n);
    console.log('accum', accum.toFixed(5), " result", nRounded);
    accum += n -nRounded
    return nRounded
  }
})();

