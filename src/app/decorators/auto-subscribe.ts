import { Subscription } from 'rxjs';

export function AutoSubscribe(): ClassDecorator {
  return function (constructor: Function) {
    const original = constructor.prototype.ngOnDestroy;

    constructor.prototype.ngOnDestroy = function () {
      for (let propName in this) {
        const property = this[propName];
        if (property instanceof Subscription) {
          property.unsubscribe();
        }
      }
      original && typeof original === 'function' && original.apply(this, arguments);
    }
  }
}
