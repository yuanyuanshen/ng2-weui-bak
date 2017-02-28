import { Component } from "@angular/core";
import { CheckItem, SwitchItem, SelectOption } from "../component/form/input.component";

@Component({
  selector: "input-demo",
  template: `
    <div class="page js_show">
      <div class="page__hd">
        <h1 class="page__title">Input</h1>
        <p class="page__desc">表单输入</p>
      </div>
      <div class="page__bd">
        <form name="Form">
          <div wx-cells-title title="单选列表项"></div>
          <div wx-radio [item]="radioItem" [(ngModel)]="checkedRadioItem" [ngModelOptions]="{standalone: true}"></div>
          <div wx-cells-tips tips="选择结果: {{checkedRadioItem}}"></div>
          <div wx-cells-title title="多选列表项"></div>
          <div wx-checkbox [item]="checkboxItem" [(ngModel)]="checkedCheckboxItems" [ngModelOptions]="{standalone: true}"></div>
          <div wx-cells-tips tips="选择结果: {{checkedCheckboxItems}}"></div>
          <div wx-cells-title title="表单"></div>
          <div wx-cells-form>
            <div wx-cell>
              <div wx-cell-header>
                <label wx-label label="qq"></label>
              </div>
              <div wx-cell-body>
                <input wx-input type="number" max-length="3" pattern="[0-9]*" [(ngModel)]="qqInput" [ngModelOptions]="{standalone: true}" placeholder="请输入qq号"/>
              </div>
            </div>
            <div wx-cell-vcode>
              <div wx-cell-header>
                <label wx-label label="手机号"></label>
              </div>
              <div wx-cell-body>
                <input wx-input type="tel" [(ngModel)]="telInput" [ngModelOptions]="{standalone: true}" placeholder="请输入手机号"/>
              </div>
              <div wx-cell-footer>
                <a wx-button-vcode label="获取验证码"></a>
              </div>
            </div>
            <div wx-cell>
              <div wx-cell-header>
                <label wx-label label="日期"></label>
              </div>
              <div wx-cell-body>
                <input wx-input type="date" [(ngModel)]="dateInput" [ngModelOptions]="{standalone: true}"/>
              </div>
            </div>
            <div wx-cell>
              <div wx-cell-header>
                <label wx-label label="时间"></label>
              </div>
              <div wx-cell-body>
                <input wx-input type="datetime-local" [(ngModel)]="timeInput" [ngModelOptions]="{standalone: true}"/>
              </div>
            </div>
            <div wx-cell-vcode>
              <div wx-cell-header>
                <label wx-label label="验证码"></label>
              </div>
              <div wx-cell-body>
                <input wx-input type="tel" [(ngModel)]="vcodeInput" [ngModelOptions]="{standalone: true}" placeholder="请输入验证码"/>
              </div>
              <div wx-cell-footer>
                <img class="weui-vcode-img" src="./images/vcode.jpg"/>
              </div>
            </div>
          </div>
          <div wx-cells-tips tips="Form内容: qq:{{qqInput}} | 手机:{{telInput}} | 日期:{{dateInput}} | 时间:{{timeInput}} | 验证码:{{vcodeInput}}"></div>
          <div wx-cells-tips tips="底部说明文字底部说明文字"></div>
          <div wx-cells-title title="表单报错"></div>
          <div wx-cells-form>
            <div wx-cell-warn>
              <div wx-cell-header>
                <label wx-label label="卡号"></label>
              </div>
              <div wx-cell-body>
                <input wx-input type="tel" [(ngModel)]="cardInput" [ngModelOptions]="{standalone: true}" placeholder="请输入卡号"/>
              </div>
              <div wx-cell-footer>
                <i class="weui-icon-warn"></i>
              </div>
            </div>
            <a wx-cell-link label="添加更多" [uri]="links1"></a>
          </div>
          <div wx-cells-tips tips="卡号内容: {{cardInput}}"></div>
          <div wx-cells-title title="开关"></div>
          <div wx-cells>
            <div wx-switch [item]="switchItem" [ngModelOptions]="{standalone: true}" [(ngModel)]="switchStatus"></div>
          </div>
          <div wx-cells-tips tips="开关状态: {{switchStatus}}"></div>
          <div wx-cells-title title="文本框"></div>
          <div wx-cells>
            <div wx-cell>
              <div wx-cell-body>
                <input wx-input type="text" [(ngModel)]="textInput" [ngModelOptions]="{standalone: true}" placeholder="请输入文本"/>
              </div>
            </div>
          </div>
          <div wx-cells-tips tips="文本框内容: {{textInput}}"></div>
          <div wx-cells-title title="文本域"></div>
          <div wx-text-area [(ngModel)]="textareaInput" [ngModelOptions]="{standalone: true}" name="area1" rows="3" maxCharCount="20" placeholder="请输入文本"></div>
          <div wx-cells-tips tips="文本域内容: {{textareaInput}}"></div>
          <div wx-cells-title title="选择"></div>
          <div wx-cells>
            <div wx-cell-select-before>
              <select wx-select [(ngModel)]="selected1" [ngModelOptions]="{standalone: true}" [options]="selectOptions1" name="select1"></select>
              <input wx-input type="tel" [(ngModel)]="selectInput1" [ngModelOptions]="{standalone: true}" placeholder="请输入号码"/>
            </div>
          </div>
          <div wx-cells-tips tips="选择内容: {{selected1}} | {{selectInput1}}"></div>
          <div wx-cells-title title="选择"></div>
          <div wx-cells>
            <div wx-cell-select>
              <select wx-select [(ngModel)]="selected2" [ngModelOptions]="{standalone: true}" [options]="selectOptions2" name="select2"></select>
            </div>
            <div wx-cell-select-after>
              <label wx-label label="国家/地区"></label>
              <select wx-select [(ngModel)]="selected3" [ngModelOptions]="{standalone: true}" [options]="selectOptions3" name="select1"></select>
            </div>
          </div>
          <div wx-cells-tips tips="选择内容: {{selected2}} | {{selected3}}"></div>
          <label wx-agree [(ngModel)]="agreeFlag" [ngModelOptions]="{standalone: true}" for="agree" declare="阅读并同意" title="《相关条款》" url="http://www.baidu.com/"></label>
          <div wx-cells-tips tips="是否已同意: {{agreeFlag}}"></div>
          <div wx-button-area>
            <a wx-button color="primary" type="normal" label="确定"></a>
          </div>
        </form>
      </div>
      <div class="page__ft">
        <a style="cursor: pointer;" [routerLink]="['/']"><img src="./images/icon_footer_link.png"/></a>
      </div>
    </div>
  `,
})
export class InputDemoComponent {
  // 默认值
  private checkedRadioItem: string = "2";
  private checkedCheckboxItems: string = "1";
  private links1: Array<string> = ["/list"];
  private qqInput: string;
  private telInput: string;
  private dateInput: string;
  private timeInput: string;
  private vcodeInput: string;
  private cardInput: string;
  private switchStatus: boolean = true;
  private textInput: string;
  private textareaInput: string;
  private selected1: string = "1";
  private selected2: string = "1";
  private selected3: string = "2";
  private agreeFlag: boolean = true;

  // 初始化下拉、单选、多选组件数据
  private radioItem: CheckItem = {
    name: "radio1",
    options: [{
      id: "rd1",
      label: "cell standard",
      value: "1",
    }, {
      id: "rd2",
      label: "cell standard",
      value: "2",
    }],
  };
  private checkboxItem: CheckItem = {
    name: "checkbox1",
    options: [{
      id: "ck1",
      label: "standard is dealt for u.",
      value: "1",
    }, {
      id: "ck2",
      label: "standard is dealicient for u.",
      value: "2",
    }],
  };
  private switchItem: SwitchItem = {
    id: "sw1",
    label: "标题文字",
    name: "sw1",
    value: "checkbox2",
  };
  private selectOptions1: Array<SelectOption> = [{
    label: "+86",
    value: "1",
  }, {
    label: "+80",
    value: "2",
  }, {
    label: "+84",
    value: "3",
  }, {
    label: "+87",
    value: "4",
  }];
  private selectOptions2: Array<SelectOption> = [{
    label: "微信号",
    value: "1",
  }, {
    label: "QQ号",
    value: "2",
  }, {
    label: "Email",
    value: "3",
  }];
  private selectOptions3: Array<SelectOption> = [{
    label: "中国",
    value: "1",
  }, {
    label: "美国",
    value: "2",
  }, {
    label: "英国",
    value: "3",
  }];
}
