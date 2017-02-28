import { Component } from "@angular/core";

@Component({
  selector: "searchbar-demo",
  template: `
    <div class="page searchbar js_show">
      <div class="page__hd">
        <h1 class="page__title">SearchBar</h1>
        <p class="page__desc">搜索栏</p>
      </div>
      <div class="page__bd">
        <div wx-searchbar [(ngModel)]="content"></div>
      </div>
      <div class="page__ft">
        <h4>{{content}}</h4>
      </div>
    </div>
  `,
})
export class SearchbarDemoComponent {
  private content: string;
}
