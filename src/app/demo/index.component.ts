import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "index",
  template: `
    <div class="page js_show">
      <div class="page__hd">
        <h1 class="page__title">
            <img src="./images/logo.png" alt="WeUI" height="21px" />
        </h1>
        <p class="page__desc">WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。</p>
      </div>
      <div class="page__bd page__bd_spacing">
        <div class="weui-cells__title weui-flex" style="cursor: pointer" (click)="menuOpen('form')">
          <p class="weui-flex__item">表单</p>
          <img src="./images/icon_nav_form.png" width="30px" height="30px" alt="">
        </div>
        <div class="weui-cells" [ngStyle]="{display: showFlag.form}">
          <a class="weui-cell weui-cell_access" href="javascript:;" [routerLink]="['/button']">
            <div class="weui-cell__bd">
              <p>Button</p>
            </div>
            <div class="weui-cell__ft"></div>
          </a>
          <a class="weui-cell weui-cell_access" href="javascript:;" [routerLink]="['/input']">
            <div class="weui-cell__bd">
              <p>Input</p>
            </div>
            <div class="weui-cell__ft"></div>
          </a>
          <a class="weui-cell weui-cell_access" href="javascript:;" [routerLink]="['/list']">
            <div class="weui-cell__bd">
              <p>List</p>
            </div>
            <div class="weui-cell__ft"></div>
          </a>
          <a class="weui-cell weui-cell_access" href="javascript:;" [routerLink]="['/slider']">
            <div class="weui-cell__bd">
              <p>Slider</p>
            </div>
            <div class="weui-cell__ft"></div>
          </a>
          <a class="weui-cell weui-cell_access" href="javascript:;" [routerLink]="['/uploader']">
            <div class="weui-cell__bd">
              <p>Uploader</p>
            </div>
            <div class="weui-cell__ft"></div>
          </a>
        </div>

        <div class="weui-cells__title weui-flex" style="cursor: pointer" (click)="menuOpen('layout')">
          <p class="weui-flex__item">基础组件</p>
          <img src="./images/icon_nav_layout.png" width="30px" height="30px" alt="">
        </div>
        <div class="weui-cells" [ngStyle]="{display: showFlag.layout}">
          <a class="weui-cell weui-cell_access" href="javascript:;" [routerLink]="['/article']">
            <div class="weui-cell__bd">
              <p>Article</p>
            </div>
            <div class="weui-cell__ft"></div>
          </a>
          <a class="weui-cell weui-cell_access" href="javascript:;" [routerLink]="['/badge']">
            <div class="weui-cell__bd">
              <p>Badge</p>
            </div>
            <div class="weui-cell__ft"></div>
          </a>
          <a class="weui-cell weui-cell_access" href="javascript:;" [routerLink]="['/flex']">
            <div class="weui-cell__bd">
              <p>Flex</p>
            </div>
            <div class="weui-cell__ft"></div>
          </a>
          <a class="weui-cell weui-cell_access" href="javascript:;" [routerLink]="['/footer']">
            <div class="weui-cell__bd">
              <p>Footer</p>
            </div>
            <div class="weui-cell__ft"></div>
          </a>
          <a class="weui-cell weui-cell_access" href="javascript:;" [routerLink]="['/gallery']">
            <div class="weui-cell__bd">
              <p>Gallery</p>
            </div>
            <div class="weui-cell__ft"></div>
          </a>
          <a class="weui-cell weui-cell_access" href="javascript:;" [routerLink]="['/grid']">
            <div class="weui-cell__bd">
              <p>Grid</p>
            </div>
            <div class="weui-cell__ft"></div>
          </a>
          <a class="weui-cell weui-cell_access" href="javascript:;" [routerLink]="['/icons']">
            <div class="weui-cell__bd">
              <p>Icons</p>
            </div>
            <div class="weui-cell__ft"></div>
          </a>
          <a class="weui-cell weui-cell_access" href="javascript:;" [routerLink]="['/loadmore']">
            <div class="weui-cell__bd">
              <p>Loadmore</p>
            </div>
            <div class="weui-cell__ft"></div>
          </a>
          <a class="weui-cell weui-cell_access" href="javascript:;" [routerLink]="['/panel']">
            <div class="weui-cell__bd">
              <p>Panel</p>
            </div>
            <div class="weui-cell__ft"></div>
          </a>
          <a class="weui-cell weui-cell_access" href="javascript:;" [routerLink]="['/preview']">
            <div class="weui-cell__bd">
              <p>Preview</p>
            </div>
            <div class="weui-cell__ft"></div>
          </a>
          <a class="weui-cell weui-cell_access" href="javascript:;" [routerLink]="['/progress']">
            <div class="weui-cell__bd">
              <p>Progress</p>
            </div>
            <div class="weui-cell__ft"></div>
          </a>
        </div>

        <div class="weui-cells__title weui-flex" style="cursor: pointer" (click)="menuOpen('feedback')">
          <p class="weui-flex__item">操作反馈</p>
          <img src="./images/icon_nav_feedback.png" width="30px" height="30px" alt="">
        </div>
        <div class="weui-cells" [ngStyle]="{display: showFlag.feedback}">
          <a class="weui-cell weui-cell_access" href="javascript:;" [routerLink]="['/actionsheet']">
            <div class="weui-cell__bd">
              <p>Actionsheet</p>
            </div>
            <div class="weui-cell__ft"></div>
          </a>
          <a class="weui-cell weui-cell_access" href="javascript:;" [routerLink]="['/dialog']">
            <div class="weui-cell__bd">
              <p>Dialog</p>
            </div>
            <div class="weui-cell__ft"></div>
          </a>
          <a class="weui-cell weui-cell_access" href="javascript:;" [routerLink]="['/msg']">
            <div class="weui-cell__bd">
              <p>Msg</p>
            </div>
            <div class="weui-cell__ft"></div>
          </a>
          <a class="weui-cell weui-cell_access" href="javascript:;" [routerLink]="['/picker']">
            <div class="weui-cell__bd">
              <p>Picker</p>
            </div>
            <div class="weui-cell__ft"></div>
          </a>
          <a class="weui-cell weui-cell_access" href="javascript:;" [routerLink]="['/toast']">
            <div class="weui-cell__bd">
              <p>Toast</p>
            </div>
            <div class="weui-cell__ft"></div>
          </a>
        </div>

        <div class="weui-cells__title weui-flex" style="cursor: pointer" (click)="menuOpen('nav')">
          <p class="weui-flex__item">导航相关</p>
          <img src="./images/icon_nav_nav.png" width="30px" height="30px" alt="">
        </div>
        <div class="weui-cells" [ngStyle]="{display: showFlag.nav}">
          <a class="weui-cell weui-cell_access" href="javascript:;" [routerLink]="['/navbar']">
            <div class="weui-cell__bd">
              <p>Navbar</p>
            </div>
            <div class="weui-cell__ft"></div>
          </a>
          <a class="weui-cell weui-cell_access" href="javascript:;" [routerLink]="['/tabbar']">
            <div class="weui-cell__bd">
              <p>Tabbar</p>
            </div>
            <div class="weui-cell__ft"></div>
          </a>
        </div>

        <div class="weui-cells__title weui-flex" style="cursor: pointer" (click)="menuOpen('search')">
          <p class="weui-flex__item">搜索相关</p>
          <img src="./images/icon_nav_search.png" width="30px" height="30px" alt="">
        </div>
        <div class="weui-cells" [ngStyle]="{display: showFlag.search}">
          <a class="weui-cell weui-cell_access" href="javascript:;" [routerLink]="['/search-bar']">
            <div class="weui-cell__bd">
              <p>Search Bar</p>
            </div>
            <div class="weui-cell__ft"></div>
          </a>
        </div>

        <div class="weui-cells__title weui-flex" style="cursor: pointer" [routerLink]="['/z-index']">
          <p class="weui-flex__item">层级规范</p>
          <img src="./images/icon_nav_z-index.png" width="30px" height="30px" alt="">
        </div>
        <div class="weui-cells__title weui-flex" style="cursor: pointer" [routerLink]="['/cabinsetmap']">
          <p class="weui-flex__item">国航之翼</p>
          <img src="./images/icon_nav_search.png" width="30px" height="30px" alt="">
        </div>
      </div>
      <div class="page__ft">
        <img src="./images/icon_footer.png"/>
      </div>
    </div>
  `,
})
export class IndexComponent implements OnInit {
  private showFlag: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.showFlag = {
      feedback: "none",
      form: "none",
      layout: "none",
      nav: "none",
      search: "none",
    };
  }

  public menuOpen(input): void {
    switch (input) {
      case "form":
        this.ngOnInit();
        this.showFlag.form = "block";
        break;
      case "layout":
        this.ngOnInit();
        this.showFlag.layout = "block";
        break;
      case "feedback":
        this.ngOnInit();
        this.showFlag.feedback = "block";
        break;
      case "nav":
        this.ngOnInit();
        this.showFlag.nav = "block";
        break;
      case "search":
        this.ngOnInit();
        this.showFlag.search = "block";
        break;
      default:
        break;
    }
  }
}
