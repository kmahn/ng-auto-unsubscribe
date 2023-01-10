import { Component, OnInit } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { AutoSubscribe } from 'src/app/decorators';
import { CountService } from '../../services';

@Component({
  selector: 'lf-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
@AutoSubscribe('_subscription2')
export class Child2Component implements OnInit {
  count1 = 0;
  count2 = 0;

  private _subscription1?: Subscription;
  private _subscription2?: Subscription;

  constructor(private _countService: CountService) {
  }

  ngOnInit(): void {
    this._subscription1 = this._countService
      .create('Child2Component count1')
      .pipe(map(count => count * 2))
      .subscribe(count => this.count1 = count);

    this._subscription2 = this._countService
      .create('Child2Component count2')
      .pipe(map(count => count * 2))
      .subscribe(count => this.count2 = count);
  }
}
