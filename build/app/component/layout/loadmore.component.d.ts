import { OnInit } from "@angular/core";
/**
 * WeUI 载入更多组件
 * @class              WxLoadmoreComponent
 * @property {boolean} WxLoadmoreComponent.withLine - 输入参数: 是否有横线
 * @property {boolean} WxLoadmoreComponent.withDot  - 输入参数: 是否有点
 */
export declare class WxLoadmoreComponent implements OnInit {
    private classes;
    private withLine;
    private withDot;
    ngOnInit(): void;
}
/**
 * WeUI 载入更多提示语组件
 * @class              WxLoadmoreTipsComponent
 * @property {boolean} WxLoadmoreTipsComponent.tips - 输入参数: 提示语
 */
export declare class WxLoadmoreTipsComponent {
    private tips;
}
