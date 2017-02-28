import { OnInit } from "@angular/core";
import { Router } from "@angular/router";
/**
 * WeUI 面板组件
 * @class WxPanelComponent
 */
export declare class WxPanelComponent {
}
/**
 * WeUI 面板 Header 组件
 * @class WxPanelHeaderComponent
 */
export declare class WxPanelHeaderComponent {
}
/**
 * WeUI 面板 Body 组件
 * @class WxPanelBodyComponent
 */
export declare class WxPanelBodyComponent {
}
/**
 * WeUI 面板 Footer 组件
 * @class WxPanelFooterComponent
 */
export declare class WxPanelFooterComponent {
}
/**
 * WeUI 多媒体应用消息组件
 * @class                 WxMediaBoxAppMsgComponent
 * @property {Array<any>} WxMediaBoxAppMsgComponent.uri - 输入参数: Router对象跳转参数数组
 * @property {string}     WxMediaBoxAppMsgComponent.uri - 输入参数: URL地址字符串
 */
export declare class WxMediaBoxAppMsgComponent implements OnInit {
    private router;
    private styles;
    private uri;
    constructor(router: Router);
    ngOnInit(): void;
    private doLink();
}
/**
 * WeUI 多媒体应用消息组件
 * @class WxMediaBoxSmallAppMsgComponent
 */
export declare class WxMediaBoxSmallAppMsgComponent {
}
/**
 * WeUI 多媒体文本组件
 * @class                 WxMediaBoxTextComponent
 * @property {Array<any>} WxMediaBoxTextComponent.uri - 输入参数: Router对象跳转参数数组
 * @property {string}     WxMediaBoxTextComponent.uri - 输入参数: URL地址字符串
 */
export declare class WxMediaBoxTextComponent implements OnInit {
    private router;
    private styles;
    private uri;
    constructor(router: Router);
    ngOnInit(): void;
    private doLink();
}
/**
 * WeUI 多媒体 Header 组件
 * @class WxMediaBoxHeaderComponent
 */
export declare class WxMediaBoxHeaderComponent {
}
/**
 * WeUI 多媒体 Body 组件
 * @class WxMediaBoxBodyComponent
 */
export declare class WxMediaBoxBodyComponent {
}
/**
 * WeUI 多媒体图片组件
 * @class WxMediaBoxThumbComponent
 */
export declare class WxMediaBoxThumbComponent {
}
/**
 * WeUI 多媒体标题组件
 * @class WxMediaBoxTitleComponent
 */
export declare class WxMediaBoxTitleComponent {
}
/**
 * WeUI 多媒体描述组件
 * @class WxMediaBoxDescComponent
 */
export declare class WxMediaBoxDescComponent {
}
/**
 * WeUI 多媒体详情组件
 * @class WxMediaBoxInfoComponent
 */
export declare class WxMediaBoxInfoComponent {
}
/**
 * WeUI 多媒体详情 Meta 组件
 * @class WxMediaBoxInfoMetaComponent
 */
export declare class WxMediaBoxInfoMetaComponent {
}
/**
 * WeUI 多媒体详情 Meta Extra 组件
 * @class WxMediaBoxInfoComponent
 */
export declare class WxMediaBoxInfoMetaExtraComponent {
}
