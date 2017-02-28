import { OnInit } from "@angular/core";
import { Router } from "@angular/router";
/**
 * WeUI 九宫格组件
 * @class WxGridsComponent
 */
export declare class WxGridsComponent {
}
/**
 * WeUI 九宫格单元格组件
 * @class                 WxGridComponent
 * @property {Array<any>} WxGridComponent.uri - 输入参数: Router对象跳转参数数组
 * @property {string}     WxGridComponent.uri - 输入参数: URL地址字符串
 */
export declare class WxGridComponent implements OnInit {
    private router;
    private styles;
    private uri;
    constructor(router: Router);
    ngOnInit(): void;
    private doLink();
}
/**
 * WeUI 九宫格图标组件
 * @class             WxGridIconComponent
 * @property {string} WxGridIconComponent.iconUrl - 输入参数: 图标URL地址
 */
export declare class WxGridIconComponent {
    private iconUrl;
}
/**
 * WeUI 九宫格标签组件
 * @class             WxGridLabelComponent
 * @property {string} WxGridLabelComponent.label - 输入参数: 标签内容
 */
export declare class WxGridLabelComponent {
    private label;
}
