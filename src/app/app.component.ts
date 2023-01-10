import { Component } from '@angular/core';

@Component({
  selector: 'lf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  viewChild = 1;

  toggleChild() {
    this.viewChild = this.viewChild === 1 ? 2 : 1;
  }
}
