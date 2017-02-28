import { Component, Input, HostBinding, OnInit } from "@angular/core";

export type ButtonType = "primary" | "default";

/**
 * WeUI 表单预览组件
 * @class WxPreviewComponent
 */
@Component({
  host: {
    "class": "weui-form-preview",
  },
  selector: "div[wx-form-preview]",
  template: `
    <ng-content select="[wx-form-preview-header]"></ng-content>
    <ng-content select="[wx-form-preview-body]"></ng-content>
    <ng-content select="[wx-form-preview-footer]"></ng-content>
  `,
})
export class WxPreviewComponent { }

/**
 * WeUI 表单预览 Header 组件
 * @class WxPreviewHeaderComponent
 */
@Component({
  host: {
    "class": "weui-form-preview__hd",
  },
  selector: "div[wx-form-preview-header]",
  template: `
    <ng-content select="[wx-form-preview-item]"></ng-content>
  `,
})
export class WxPreviewHeaderComponent { }

/**
 * WeUI 表单预览 Body 组件
 * @class WxPreviewBodyComponent
 */
@Component({
  host: {
    "class": "weui-form-preview__bd",
  },
  selector: "div[wx-form-preview-body]",
  template: `
    <ng-content select="[wx-form-preview-item]"></ng-content>
  `,
})
export class WxPreviewBodyComponent { }

/**
 * WeUI 表单预览 Footer 组件
 * @class WxPreviewFooterComponent
 */
@Component({
  host: {
    "class": "weui-form-preview__ft",
  },
  selector: "div[wx-form-preview-footer]",
  template: `
    <ng-content select="[wx-form-preview-button]"></ng-content>
  `,
})
export class WxPreviewFooterComponent { }

/**
 * WeUI 表单预览成员组件
 * @class WxPreviewItemComponent
 */
@Component({
  host: {
    "class": "weui-form-preview__item",
  },
  selector: "div[wx-form-preview-item]",
  template: `
    <ng-content select="[wx-form-preview-label]"></ng-content>
    <ng-content select="[wx-form-preview-value]"></ng-content>
  `,
})
export class WxPreviewItemComponent { }

/**
 * WeUI 表单预览标签组件
 * @class             WxPreviewLabelComponent
 * @property {string} WxPreviewLabelComponent.label - 输入参数: 标签内容
 */
@Component({
  host: {
    "class": "weui-form-preview__label",
  },
  selector: "label[wx-form-preview-label]",
  template: `
    {{label}}
  `,
})
export class WxPreviewLabelComponent {
  @Input()
  private label: string;
}

/**
 * WeUI 表单预览值组件
 * @class             WxPreviewValueComponent
 * @property {string} WxPreviewValueComponent.value - 输入参数: 显示值
 */
@Component({
  host: {
    "class": "weui-form-preview__value",
  },
  selector: "span[wx-form-preview-value]",
  template: `
    {{value}}
  `,
})
export class WxPreviewValueComponent {
  @Input()
  private value: string;
}

/**
 * WeUI 表单预览值组件
 * @class             WxPreviewValueStressComponent
 * @property {string} WxPreviewValueStressComponent.value - 输入参数: 显示值
 */
@Component({
  host: {
    "class": "weui-form-preview__value",
  },
  selector: "em[wx-form-preview-value]",
  template: `
    {{value}}
  `,
})
export class WxPreviewValueStressComponent {
  @Input()
  private value: string;
}

/**
 * WeUI 表单预览按钮组件
 * @class                 WxPreviewButtonComponent
 * @property {string}     WxPreviewButtonComponent.label - 输入参数: 标签
 * @property {ButtonType} WxPreviewButtonComponent.type  - 输入参数: 类型
 */
@Component({
  host: {
    "style": "cursor: pointer;",
  },
  selector: "a[wx-form-preview-button]",
  template: `
    {{label}}
  `,
})
export class WxPreviewButtonComponent implements OnInit {
  @HostBinding("attr.class")
  private classes: string = "weui-form-preview__btn";
  @Input()
  private label: string;
  @Input()
  private type: ButtonType;

  public ngOnInit(): void {
    if (this.type && this.type === "primary") {
      this.classes += " weui-form-preview__btn_primary";
    } else {
      this.classes += " weui-form-preview__btn_default";
    }
  }
}
