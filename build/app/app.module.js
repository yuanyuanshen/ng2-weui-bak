"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var index_component_1 = require("./demo/index.component");
var input_demo_component_1 = require("./demo/input-demo.component");
var list_demo_component_1 = require("./demo/list-demo.component");
var button_demo_component_1 = require("./demo/button-demo.component");
var cabinSetMap_component_1 = require("./demo/cabinSetMap.component");
var icon_demo_component_1 = require("./demo/icon-demo.component");
var article_demo_component_1 = require("./demo/article-demo.component");
var footer_demo_component_1 = require("./demo/footer-demo.component");
var panel_demo_component_1 = require("./demo/panel-demo.component");
var grid_demo_component_1 = require("./demo/grid-demo.component");
var flex_demo_component_1 = require("./demo/flex-demo.component");
var preview_demo_component_1 = require("./demo/preview-demo.component");
var loadmore_demo_component_1 = require("./demo/loadmore-demo.component");
var progress_demo_component_1 = require("./demo/progress-demo.component");
var gallery_demo_component_1 = require("./demo/gallery-demo.component");
var msg_demo_component_1 = require("./demo/msg-demo.component");
var toast_demo_component_1 = require("./demo/toast-demo.component");
var actionsheet_demo_component_1 = require("./demo/actionsheet-demo.component");
var dialog_demo_component_1 = require("./demo/dialog-demo.component");
var navbar_demo_component_1 = require("./demo/navbar-demo.component");
var tabbar_demo_component_1 = require("./demo/tabbar-demo.component");
var searchbar_demo_component_1 = require("./demo/searchbar-demo.component");
var zIndex_component_1 = require("./demo/zIndex.component");
var uploader_demo_component_1 = require("./demo/uploader-demo.component");
var slider_demo_component_1 = require("./demo/slider-demo.component");
var badge_demo_component_1 = require("./demo/badge-demo.component");
var picker_demo_component_1 = require("./demo/picker-demo.component");
var button_component_1 = require("./component/form/button.component");
var input_component_1 = require("./component/form/input.component");
var list_component_1 = require("./component/form/list.component");
var icons_component_1 = require("./component/layout/icons.component");
var article_component_1 = require("./component/layout/article.component");
var footer_component_1 = require("./component/layout/footer.component");
var panel_component_1 = require("./component/layout/panel.component");
var grid_component_1 = require("./component/layout/grid.component");
var flex_component_1 = require("./component/layout/flex.component");
var preview_component_1 = require("./component/layout/preview.component");
var loadmore_component_1 = require("./component/layout/loadmore.component");
var progress_component_1 = require("./component/layout/progress.component");
var gallery_component_1 = require("./component/layout/gallery.component");
var msg_component_1 = require("./component/feedback/msg.component");
var toast_component_1 = require("./component/feedback/toast.component");
var actionsheet_component_1 = require("./component/feedback/actionsheet.component");
var dialog_component_1 = require("./component/feedback/dialog.component");
var nav_component_1 = require("./component/nav/nav.component");
var searchbar_component_1 = require("./component/search/searchbar.component");
var uploader_component_1 = require("./component/form/uploader.component");
var slider_component_1 = require("./component/form/slider.component");
var badge_component_1 = require("./component/layout/badge.component");
var picker_component_1 = require("./component/feedback/picker.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [app_component_1.AppComponent],
        declarations: [
            app_component_1.AppComponent,
            article_demo_component_1.ArticleDemoComponent,
            actionsheet_demo_component_1.ActionsheetDemoComponent,
            input_demo_component_1.InputDemoComponent,
            button_demo_component_1.ButtonDemoComponent,
            cabinSetMap_component_1.CabinSeatMap,
            dialog_demo_component_1.DialogDemoComponent,
            flex_demo_component_1.FlexDemoComponent,
            footer_demo_component_1.FooterDemoComponent,
            grid_demo_component_1.GridDemoComponent,
            gallery_demo_component_1.GalleryDemoComponent,
            index_component_1.IndexComponent,
            list_demo_component_1.ListDemoComponent,
            loadmore_demo_component_1.LoadmoreDemoComponent,
            msg_demo_component_1.MsgDemoComponent,
            navbar_demo_component_1.NavbarDemoComponent,
            tabbar_demo_component_1.TabbarDemoComponent,
            panel_demo_component_1.PanelDemoComponent,
            preview_demo_component_1.PreviewDemoComponent,
            progress_demo_component_1.ProgressDemoComponent,
            searchbar_demo_component_1.SearchbarDemoComponent,
            toast_demo_component_1.ToastDemoComponent,
            uploader_demo_component_1.UploaderDemoComponent,
            slider_demo_component_1.SliderDemoComponent,
            icon_demo_component_1.IconDemoComponent,
            badge_demo_component_1.BadgeDemoComponent,
            picker_demo_component_1.PickerDemoComponent,
            article_component_1.WxArticleComponent,
            button_component_1.WxButtonComponent,
            button_component_1.WxButtonVcodeComponent,
            button_component_1.WxButtonAreaComponent,
            list_component_1.WxCellComponent,
            list_component_1.WxCellsComponent,
            list_component_1.WxCellHeaderComponent,
            list_component_1.WxCellBodyComponent,
            list_component_1.WxCellFooterComponent,
            list_component_1.WxCellLinkComponent,
            list_component_1.WxCellAccessComponent,
            list_component_1.WxCellWarnComponent,
            list_component_1.WxCellsFormComponent,
            list_component_1.WxCellVcodeComponent,
            list_component_1.WxCellsTitleComponent,
            list_component_1.WxCellsTipsComponent,
            list_component_1.WxCellSelectComponent,
            list_component_1.WxCellSelectBeforeComponent,
            list_component_1.WxCellSelectAfterComponent,
            footer_component_1.WxFooterComponent,
            list_component_1.WxLabelComponent,
            icons_component_1.WxIconComponent,
            input_component_1.WxInputComponent,
            panel_component_1.WxPanelComponent, panel_component_1.WxPanelBodyComponent, panel_component_1.WxPanelHeaderComponent, panel_component_1.WxPanelFooterComponent,
            panel_component_1.WxMediaBoxTextComponent, panel_component_1.WxMediaBoxBodyComponent, panel_component_1.WxMediaBoxDescComponent, panel_component_1.WxMediaBoxInfoComponent,
            panel_component_1.WxMediaBoxThumbComponent, panel_component_1.WxMediaBoxTitleComponent, panel_component_1.WxMediaBoxAppMsgComponent, panel_component_1.WxMediaBoxHeaderComponent,
            panel_component_1.WxMediaBoxInfoMetaComponent, panel_component_1.WxMediaBoxInfoMetaExtraComponent, panel_component_1.WxMediaBoxSmallAppMsgComponent,
            grid_component_1.WxGridComponent, grid_component_1.WxGridsComponent, grid_component_1.WxGridIconComponent, grid_component_1.WxGridLabelComponent,
            flex_component_1.WxFlexComponent, flex_component_1.WxFlexItemComponent,
            preview_component_1.WxPreviewComponent, preview_component_1.WxPreviewBodyComponent, preview_component_1.WxPreviewItemComponent, preview_component_1.WxPreviewLabelComponent,
            preview_component_1.WxPreviewValueComponent, preview_component_1.WxPreviewHeaderComponent, preview_component_1.WxPreviewFooterComponent, preview_component_1.WxPreviewButtonComponent,
            preview_component_1.WxPreviewValueStressComponent,
            loadmore_component_1.WxLoadmoreComponent, loadmore_component_1.WxLoadmoreTipsComponent,
            progress_component_1.WxProgressComponent, progress_component_1.WxProgressBarComponent, progress_component_1.WxProgressOperateComponent,
            msg_component_1.WxMsgComponent,
            toast_component_1.WxToastComponent,
            actionsheet_component_1.WxActionsheetIOSComponent, actionsheet_component_1.WxActionsheetAndroidComponent,
            dialog_component_1.WxDialogIOSComponent, dialog_component_1.WxDialogAndroidComponent,
            nav_component_1.WxNavbarComponent, nav_component_1.WxTabbarComponent,
            searchbar_component_1.WxSearchbarComponent,
            gallery_component_1.WxGalleryComponent,
            input_component_1.WxSelectComponent,
            input_component_1.WxTextAreaComponent,
            input_component_1.WxCheckboxComponent,
            input_component_1.WxRadioComponent,
            input_component_1.WxSwitchComponent,
            input_component_1.WxAgreeComponent,
            uploader_component_1.WxUploaderComponent,
            slider_component_1.WxSliderComponent, slider_component_1.WxSliderBoxComponent, slider_component_1.WxSliderBoxValueComponent,
            badge_component_1.WxBadgeComponent, badge_component_1.WxBadgeDotComponent,
            picker_component_1.WxDatePickerComponent,
            zIndex_component_1.ZIndexComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                {
                    component: index_component_1.IndexComponent,
                    path: "index",
                },
                {
                    component: input_demo_component_1.InputDemoComponent,
                    path: "input",
                },
                {
                    component: button_demo_component_1.ButtonDemoComponent,
                    path: "button",
                },
                {
                    component: cabinSetMap_component_1.CabinSeatMap,
                    path: "cabinsetmap"
                },
                {
                    component: list_demo_component_1.ListDemoComponent,
                    path: "list",
                },
                {
                    component: uploader_demo_component_1.UploaderDemoComponent,
                    path: "uploader",
                },
                {
                    component: slider_demo_component_1.SliderDemoComponent,
                    path: "slider",
                },
                {
                    component: icon_demo_component_1.IconDemoComponent,
                    path: "icons",
                },
                {
                    component: article_demo_component_1.ArticleDemoComponent,
                    path: "article",
                },
                {
                    component: badge_demo_component_1.BadgeDemoComponent,
                    path: "badge",
                },
                {
                    component: footer_demo_component_1.FooterDemoComponent,
                    path: "footer",
                },
                {
                    component: panel_demo_component_1.PanelDemoComponent,
                    path: "panel",
                },
                {
                    component: grid_demo_component_1.GridDemoComponent,
                    path: "grid",
                },
                {
                    component: flex_demo_component_1.FlexDemoComponent,
                    path: "flex",
                },
                {
                    component: preview_demo_component_1.PreviewDemoComponent,
                    path: "preview",
                },
                {
                    component: loadmore_demo_component_1.LoadmoreDemoComponent,
                    path: "loadmore",
                },
                {
                    component: progress_demo_component_1.ProgressDemoComponent,
                    path: "progress",
                },
                {
                    component: gallery_demo_component_1.GalleryDemoComponent,
                    path: "gallery",
                },
                {
                    component: msg_demo_component_1.MsgDemoComponent,
                    path: "msg",
                },
                {
                    component: picker_demo_component_1.PickerDemoComponent,
                    path: "picker",
                },
                {
                    component: toast_demo_component_1.ToastDemoComponent,
                    path: "toast",
                },
                {
                    component: actionsheet_demo_component_1.ActionsheetDemoComponent,
                    path: "actionsheet",
                },
                {
                    component: dialog_demo_component_1.DialogDemoComponent,
                    path: "dialog",
                },
                {
                    component: navbar_demo_component_1.NavbarDemoComponent,
                    path: "navbar",
                },
                {
                    component: tabbar_demo_component_1.TabbarDemoComponent,
                    path: "tabbar",
                },
                {
                    component: searchbar_demo_component_1.SearchbarDemoComponent,
                    path: "search-bar",
                },
                {
                    component: zIndex_component_1.ZIndexComponent,
                    path: "z-index",
                },
                {
                    path: "",
                    pathMatch: "full",
                    redirectTo: "index",
                },
            ]),
        ],
    })
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
