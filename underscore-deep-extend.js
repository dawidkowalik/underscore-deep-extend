_.deepExtend = function(target, source) {
    _.each(source, function (val, key) {
      if (_.isObject(val)) {
        _.deepObjectExtend(target[key], val);
      } else {
        target[key] = val;
      }
    })
    return target;
  }
