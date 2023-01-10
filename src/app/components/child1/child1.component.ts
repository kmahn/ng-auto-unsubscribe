import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AutoSubscribe } from 'src/app/decorators';
import { CountService } from 'src/app/services';

@Component({
  selector: 'lf-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
@AutoSubscribe()
export class Child1Component implements OnInit {

  count1 = 0;
  count2 = 0;

  private _subscription = new Subscription();

  constructor(private _countService: CountService) {
  }

  ngOnInit(): void {
    [
      this._countService.create('Child1Component count1')
        .subscribe(count => this.count1 = count),
      this._countService.create('Child1Component count2')
        .subscribe(count => this.count2 = count)
    ].forEach(s => this._subscription.add(s));
  }
}
