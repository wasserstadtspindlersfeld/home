const mathHelper = {
  // Round a number with given precision.
  precisionRound: function (value, precision) {
    const factor = Math.pow(10, precision);
    const roundedValue = Math.round((value + Number.EPSILON) * factor) / factor;
    return roundedValue;
  }
};
