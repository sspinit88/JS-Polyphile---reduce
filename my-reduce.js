export function initReducePolyphile() {
  if (Array.prototype.meReduce) {
    return;
  }

  Array.prototype.myReduce = function (callback, initValue) {
    /// проверка на массивоподобную сущность
    if (
      !(
        this instanceof Array ||
        this instanceof String ||
        typeof this === 'string'
      )
    ) {
      throw new TypeError(
        `Array.prototype.myMap was called on wrong type ${typeof this}`
      );
    }

    /// проверка на отстутствие колбека
    if (typeof callback !== 'function') {
      throw new TypeError(
        `Array.prototype.myReduce ${callback} is not a function`
      );
    }

    /// ролверка и установка первичного значения аккомулятора
    let acc = arguments.length >= 2 ? initValue : this[0];
    let indexStart = arguments.length >= 2 ? 0 : 1;

    /**
     * acc - аккомулятор;
     * this[i] - value;
     * i - index;
     * this - array;
     */

    for (let i = indexStart; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }

    return acc;
  };
}
