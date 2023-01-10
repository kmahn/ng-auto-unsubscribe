import { Subscription } from 'rxjs';

export function AutoSubscribe(...blackList: string[]): ClassDecorator {
  return function (constructor: Function) {
    const original = constructor.prototype.ngOnDestroy;

    constructor.prototype.ngOnDestroy = function () {
      for (let propName in this) {
        if (blackList.includes(propName)) {
          continue;
        }

        const property = this[propName];
        if (property instanceof Subscription) {
          property.unsubscribe();
        }
      }
      original && typeof original === 'function' && original.apply(this, arguments);
    }
  }
}
