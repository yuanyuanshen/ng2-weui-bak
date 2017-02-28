import { Component } from "@angular/core";

@Component({
  selector: "msg-demo",
  template: `
    <div wx-msg [message]="msg" [detail]="dtl">
      <i wx-icon type="success" size="large"></i>
      <a wx-button color="primary" label="推荐操作"></a>
      <a wx-button color="default" label="辅助操作"></a>
      <div wx-footer tips="Copyright &copy; 2008-2016 weui.io" [fix-bottom]="true" [links]="links3"></div>
    </div>
  `,
})
export class MsgDemoComponent {
  private msg: string = "操作成功";
  private dtl: string = "内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现";
}
