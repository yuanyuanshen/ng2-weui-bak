import { Component } from "@angular/core";

@Component({
  selector: "preview-demo",
  template: `
    <div class="page js_show">
      <div class="page__hd">
        <h1 class="page__title">Preview</h1>
        <p class="page__desc">表单预览</p>
      </div>
      <div class="page__bd">
        <div wx-form-preview>
          <div wx-form-preview-header>
            <div wx-form-preview-item>
              <label wx-form-preview-label label="付款金额"></label>
              <em wx-form-preview-value value="¥2400.00"></em>
            </div>
          </div>
          <div wx-form-preview-body>
            <div wx-form-preview-item>
              <label wx-form-preview-label label="商品"></label>
              <span wx-form-preview-value value="电动打蛋机"></span>
            </div>
            <div wx-form-preview-item>
              <label wx-form-preview-label label="标题标题"></label>
              <span wx-form-preview-value value="名字名字名字"></span>
            </div>
            <div wx-form-preview-item>
              <label wx-form-preview-label label="标题标题"></label>
              <span wx-form-preview-value value="很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字"></span>
            </div>
          </div>
          <div wx-form-preview-footer>
            <a wx-form-preview-button type="primary" label="操作"></a>
          </div>
        </div>
        <br>
        <div wx-form-preview>
          <div wx-form-preview-header>
            <div wx-form-preview-item>
              <label wx-form-preview-label label="付款金额"></label>
              <em wx-form-preview-value value="¥2400.00"></em>
            </div>
          </div>
          <div wx-form-preview-body>
            <div wx-form-preview-item>
              <label wx-form-preview-label label="商品"></label>
              <span wx-form-preview-value value="电动打蛋机"></span>
            </div>
            <div wx-form-preview-item>
              <label wx-form-preview-label label="标题标题"></label>
              <span wx-form-preview-value value="名字名字名字"></span>
            </div>
            <div wx-form-preview-item>
              <label wx-form-preview-label label="标题标题"></label>
              <span wx-form-preview-value value="很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字"></span>
            </div>
          </div>
          <div wx-form-preview-footer>
            <a wx-form-preview-button type="default" label="辅助操作"></a>
            <a wx-form-preview-button type="primary" label="操作"></a>
          </div>
        </div>
      </div>
      <div class="page__ft">
        <a style="cursor: pointer;" [routerLink]="['/']"><img src="./images/icon_footer_link.png"/></a>
      </div>
    </div>
  `,
})
export class PreviewDemoComponent { }
