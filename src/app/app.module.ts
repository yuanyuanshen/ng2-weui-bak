import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { IndexComponent } from "./demo/index.component";
import { InputDemoComponent } from "./demo/input-demo.component";
import { ListDemoComponent } from "./demo/list-demo.component";
import { ButtonDemoComponent } from "./demo/button-demo.component";

import { CabinSeatMap } from "./demo/cabinSetMap.component";

import { IconDemoComponent } from "./demo/icon-demo.component";
import { ArticleDemoComponent } from "./demo/article-demo.component";
import { FooterDemoComponent } from "./demo/footer-demo.component";
import { PanelDemoComponent } from "./demo/panel-demo.component";
import { GridDemoComponent } from "./demo/grid-demo.component";
import { FlexDemoComponent } from "./demo/flex-demo.component";
import { PreviewDemoComponent } from "./demo/preview-demo.component";
import { LoadmoreDemoComponent } from "./demo/loadmore-demo.component";
import { ProgressDemoComponent } from "./demo/progress-demo.component";
import { GalleryDemoComponent } from "./demo/gallery-demo.component";
import { MsgDemoComponent } from "./demo/msg-demo.component";
import { ToastDemoComponent } from "./demo/toast-demo.component";
import { ActionsheetDemoComponent } from "./demo/actionsheet-demo.component";
import { DialogDemoComponent } from "./demo/dialog-demo.component";
import { NavbarDemoComponent } from "./demo/navbar-demo.component";
import { TabbarDemoComponent } from "./demo/tabbar-demo.component";
import { SearchbarDemoComponent } from "./demo/searchbar-demo.component";
import { ZIndexComponent } from "./demo/zIndex.component";
import { UploaderDemoComponent } from "./demo/uploader-demo.component";
import { SliderDemoComponent } from "./demo/slider-demo.component";
import { BadgeDemoComponent } from "./demo/badge-demo.component";
import { PickerDemoComponent } from "./demo/picker-demo.component";

import { WxButtonComponent, WxButtonVcodeComponent, WxButtonAreaComponent } from "./component/form/button.component";
import { WxCheckboxComponent, WxRadioComponent, WxSwitchComponent,
  WxInputComponent, WxSelectComponent, WxTextAreaComponent, WxAgreeComponent} from "./component/form/input.component";
import { WxCellsComponent, WxCellComponent, WxCellHeaderComponent, WxCellBodyComponent, WxCellFooterComponent,
  WxCellWarnComponent, WxCellsFormComponent, WxCellVcodeComponent,
  WxCellSelectComponent, WxCellSelectAfterComponent, WxCellSelectBeforeComponent,
  WxCellsTitleComponent, WxCellsTipsComponent, WxLabelComponent,
  WxCellLinkComponent, WxCellAccessComponent } from "./component/form/list.component";
import { WxIconComponent } from "./component/layout/icons.component";
import { WxArticleComponent } from "./component/layout/article.component";
import { WxFooterComponent } from "./component/layout/footer.component";
import { WxPanelComponent, WxPanelBodyComponent, WxPanelHeaderComponent, WxPanelFooterComponent,
  WxMediaBoxTextComponent, WxMediaBoxBodyComponent, WxMediaBoxDescComponent, WxMediaBoxInfoComponent,
  WxMediaBoxThumbComponent, WxMediaBoxTitleComponent, WxMediaBoxAppMsgComponent, WxMediaBoxHeaderComponent,
  WxMediaBoxInfoMetaComponent, WxMediaBoxInfoMetaExtraComponent, WxMediaBoxSmallAppMsgComponent } from "./component/layout/panel.component";
import { WxGridComponent, WxGridsComponent, WxGridIconComponent, WxGridLabelComponent } from "./component/layout/grid.component";
import { WxFlexComponent, WxFlexItemComponent } from "./component/layout/flex.component";
import { WxPreviewComponent, WxPreviewBodyComponent, WxPreviewItemComponent, WxPreviewLabelComponent,
  WxPreviewValueComponent, WxPreviewHeaderComponent, WxPreviewFooterComponent, WxPreviewButtonComponent,
  WxPreviewValueStressComponent } from "./component/layout/preview.component";
import { WxLoadmoreComponent, WxLoadmoreTipsComponent } from "./component/layout/loadmore.component";
import { WxProgressComponent, WxProgressBarComponent, WxProgressOperateComponent } from "./component/layout/progress.component";
import { WxGalleryComponent } from "./component/layout/gallery.component";
import { WxMsgComponent } from "./component/feedback/msg.component";
import { WxToastComponent } from "./component/feedback/toast.component";
import { WxActionsheetIOSComponent, WxActionsheetAndroidComponent } from "./component/feedback/actionsheet.component";
import { WxDialogIOSComponent, WxDialogAndroidComponent } from "./component/feedback/dialog.component";
import { WxNavbarComponent, WxTabbarComponent } from "./component/nav/nav.component";
import { WxSearchbarComponent } from "./component/search/searchbar.component";
import { WxUploaderComponent } from "./component/form/uploader.component";
import { WxSliderComponent, WxSliderBoxComponent, WxSliderBoxValueComponent } from "./component/form/slider.component";
import { WxBadgeComponent, WxBadgeDotComponent } from "./component/layout/badge.component";
import { WxDatePickerComponent } from "./component/feedback/picker.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ArticleDemoComponent,
    ActionsheetDemoComponent,
    InputDemoComponent,
    ButtonDemoComponent,
    CabinSeatMap,
    DialogDemoComponent,
    FlexDemoComponent,
    FooterDemoComponent,
    GridDemoComponent,
    GalleryDemoComponent,
    IndexComponent,
    ListDemoComponent,
    LoadmoreDemoComponent,
    MsgDemoComponent,
    NavbarDemoComponent,
    TabbarDemoComponent,
    PanelDemoComponent,
    PreviewDemoComponent,
    ProgressDemoComponent,
    SearchbarDemoComponent,
    ToastDemoComponent,
    UploaderDemoComponent,
    SliderDemoComponent,
    IconDemoComponent,
    BadgeDemoComponent,
    PickerDemoComponent,
    WxArticleComponent,
    WxButtonComponent,
    WxButtonVcodeComponent,
    WxButtonAreaComponent,
    WxCellComponent,
    WxCellsComponent,
    WxCellHeaderComponent,
    WxCellBodyComponent,
    WxCellFooterComponent,
    WxCellLinkComponent,
    WxCellAccessComponent,
    WxCellWarnComponent,
    WxCellsFormComponent,
    WxCellVcodeComponent,
    WxCellsTitleComponent,
    WxCellsTipsComponent,
    WxCellSelectComponent,
    WxCellSelectBeforeComponent,
    WxCellSelectAfterComponent,
    WxFooterComponent,
    WxLabelComponent,
    WxIconComponent,
    WxInputComponent,
    WxPanelComponent, WxPanelBodyComponent, WxPanelHeaderComponent, WxPanelFooterComponent,
    WxMediaBoxTextComponent, WxMediaBoxBodyComponent, WxMediaBoxDescComponent, WxMediaBoxInfoComponent,
    WxMediaBoxThumbComponent, WxMediaBoxTitleComponent, WxMediaBoxAppMsgComponent, WxMediaBoxHeaderComponent,
    WxMediaBoxInfoMetaComponent, WxMediaBoxInfoMetaExtraComponent, WxMediaBoxSmallAppMsgComponent,
    WxGridComponent, WxGridsComponent, WxGridIconComponent, WxGridLabelComponent,
    WxFlexComponent, WxFlexItemComponent,
    WxPreviewComponent, WxPreviewBodyComponent, WxPreviewItemComponent, WxPreviewLabelComponent,
      WxPreviewValueComponent, WxPreviewHeaderComponent, WxPreviewFooterComponent, WxPreviewButtonComponent,
      WxPreviewValueStressComponent,
    WxLoadmoreComponent, WxLoadmoreTipsComponent,
    WxProgressComponent, WxProgressBarComponent, WxProgressOperateComponent,
    WxMsgComponent,
    WxToastComponent,
    WxActionsheetIOSComponent, WxActionsheetAndroidComponent,
    WxDialogIOSComponent, WxDialogAndroidComponent,
    WxNavbarComponent, WxTabbarComponent,
    WxSearchbarComponent,
    WxGalleryComponent,
    WxSelectComponent,
    WxTextAreaComponent,
    WxCheckboxComponent,
    WxRadioComponent,
    WxSwitchComponent,
    WxAgreeComponent,
    WxUploaderComponent,
    WxSliderComponent, WxSliderBoxComponent, WxSliderBoxValueComponent,
    WxBadgeComponent, WxBadgeDotComponent,
    WxDatePickerComponent,
    ZIndexComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        component: IndexComponent,
        path: "index",
      },
      {
        component: InputDemoComponent,
        path: "input",
      },
      {
        component: ButtonDemoComponent,
        path: "button",
      },
      {
        component: CabinSeatMap,
        path: "cabinsetmap"
      },
      {
        component: ListDemoComponent,
        path: "list",
      },
      {
        component: UploaderDemoComponent,
        path: "uploader",
      },
      {
        component: SliderDemoComponent,
        path: "slider",
      },
      {
        component: IconDemoComponent,
        path: "icons",
      },
      {
        component: ArticleDemoComponent,
        path: "article",
      },
      {
        component: BadgeDemoComponent,
        path: "badge",
      },
      {
        component: FooterDemoComponent,
        path: "footer",
      },
      {
        component: PanelDemoComponent,
        path: "panel",
      },
      {
        component: GridDemoComponent,
        path: "grid",
      },
      {
        component: FlexDemoComponent,
        path: "flex",
      },
      {
        component: PreviewDemoComponent,
        path: "preview",
      },
      {
        component: LoadmoreDemoComponent,
        path: "loadmore",
      },
      {
        component: ProgressDemoComponent,
        path: "progress",
      },
      {
        component: GalleryDemoComponent,
        path: "gallery",
      },
      {
        component: MsgDemoComponent,
        path: "msg",
      },
      {
        component: PickerDemoComponent,
        path: "picker",
      },
      {
        component: ToastDemoComponent,
        path: "toast",
      },
      {
        component: ActionsheetDemoComponent,
        path: "actionsheet",
      },
      {
        component: DialogDemoComponent,
        path: "dialog",
      },
      {
        component: NavbarDemoComponent,
        path: "navbar",
      },
      {
        component: TabbarDemoComponent,
        path: "tabbar",
      },
      {
        component: SearchbarDemoComponent,
        path: "search-bar",
      },
      {
        component: ZIndexComponent,
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
export class AppModule { }
