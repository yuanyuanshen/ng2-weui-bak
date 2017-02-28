import { Component } from "@angular/core";
import { FooterLink } from "../component/layout/footer.component";

@Component({
  selector: "footer-demo",
  template: `
    <div class="page js_show">
      <div class="page__hd">
        <h1 class="page__title">Footer</h1>
        <p class="page__desc">页脚</p>
      </div>
      <div class="page__bd page__bd_spacing">
        <div wx-footer tips="Copyright &copy; 2008-2016 weui.io"></div>
        <br>
        <br>
        <div wx-footer tips="Copyright &copy; 2008-2016 weui.io" [links]="links1"></div>
        <br>
        <br>
        <div wx-footer tips="Copyright &copy; 2008-2016 weui.io" [links]="links2"></div>
        <div wx-footer tips="Copyright &copy; 2008-2016 weui.io" [fix-bottom]="true" [links]="links3"></div>
      </div>
    </div>
  `,
})
export class FooterDemoComponent {
  private links1: Array<FooterLink> = [{
    label: "底部链接",
    uri: "http://www.baidu.com/",
  }];
  private links2: Array<FooterLink> = [{
    label: "底部链接",
    uri: "http://www.baidu.com/",
  }, {
    label: "底部链接",
    uri: ["/footer"],
  }];
  private links3: Array<FooterLink> = [{
    label: "WeUI首页",
    uri: ["/"],
  }];
}
