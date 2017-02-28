import { Component } from "@angular/core";

@Component({
  selector: "list-demo",
  template: `
    <div class="page js_show">
      <div class="page__hd">
        <h1 class="page__title">List</h1>
        <p class="page__desc">列表</p>
      </div>
      <div class="page__bd">
        <div wx-cells-title title="带说明的列表项"></div>
        <div wx-cells>
          <div wx-cell>
            <div wx-cell-body>
              <p>标题文字</p>
            </div>
            <div wx-cell-footer>说明文字</div>
          </div>
        </div>
        <div wx-cells-title title="带图标、说明的列表项"></div>
        <div wx-cells>
          <div wx-cell>
            <div wx-cell-header><img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
              alt=""
              style="width:20px;margin-right:5px;display:block"></div>
            <div wx-cell-body>
              <p>标题文字</p>
            </div>
            <div wx-cell-footer>说明文字</div>
          </div>
          <div wx-cell>
            <div wx-cell-header><img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
              alt=""
              style="width:20px;margin-right:5px;display:block"></div>
            <div wx-cell-body>
              <p>标题文字</p>
            </div>
            <div wx-cell-footer>说明文字</div>
          </div>
        </div>

        <div wx-cells-title title="带跳转的列表项"></div>
        <div wx-cells>
          <a wx-cell-access [uri]="links1">
            <div wx-cell-body>
              <p>cell standard</p>
            </div>
            <div wx-cell-footer></div>
          </a>
          <a wx-cell-access [uri]="links2">
            <div wx-cell-body>
              <p>cell standard</p>
            </div>
            <div wx-cell-footer></div>
          </a>
        </div>

        <div wx-cells-title title="带说明、跳转的列表项"></div>
        <div wx-cells>
          <a wx-cell-access [uri]="links3">
            <div wx-cell-body>
              <p>cell standard</p>
            </div>
            <div wx-cell-footer>说明文字</div>
          </a>
          <a wx-cell-access [uri]="links4">
            <div wx-cell-body>
              <p>cell standard</p>
            </div>
            <div wx-cell-footer>说明文字</div>
          </a>
        </div>

        <div wx-cells-title title="带图标、说明、跳转的列表项"></div>
        <div wx-cells>
          <a wx-cell-access [uri]="links5">
            <div wx-cell-header><img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
              alt=""
              style="width:20px;margin-right:5px;display:block"></div>
            <div wx-cell-body>
              <p>cell standard</p>
            </div>
            <div wx-cell-footer>说明文字</div>
          </a>
          <a wx-cell-access [uri]="links6">
            <div wx-cell-header><img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
              alt=""
              style="width:20px;margin-right:5px;display:block"></div>
            <div wx-cell-body>
              <p>cell standard</p>
            </div>
            <div wx-cell-footer>说明文字</div>
          </a>
        </div>
      </div>
      <div class="page__ft">
        <a style="cursor: pointer;" [routerLink]="['/']"><img src="./images/icon_footer_link.png"/></a>
      </div>
    </div>
  `,
})
export class ListDemoComponent {
  // 默认值
  private links1: Array<any> = ["/list"];
  private links2: string = "http://www.baidu.com/";
  private links3: Array<any> = ["/list"];
  private links4: string = "http://www.baidu.com/";
  private links5: Array<any> = ["/list"];
  private links6: string = "http://www.baidu.com/";
}
