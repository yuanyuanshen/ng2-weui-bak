import { Component } from "@angular/core";

@Component({
  selector: "panel-demo",
  template: `
    <div class="page js_show">
      <div class="page__hd">
        <h1 class="page__title">Panel</h1>
        <p class="page__desc">面板</p>
      </div>
      <div class="page__bd">
        <div wx-panel>
          <div wx-panel-header>图文组合列表</div>
          <div wx-panel-body>
            <a wx-media-box-app-msg [uri]="links1">
              <div wx-media-box-header>
                <img wx-media-box-thumb
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg=="
                  alt="">
              </div>
              <div wx-media-box-body>
                <h4 wx-media-box-title>标题一</h4>
                <p wx-media-box-desc>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
              </div>
            </a>
            <a wx-media-box-app-msg [uri]="links2">
              <div wx-media-box-header>
                <img wx-media-box-thumb
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg=="
                  alt="">
              </div>
              <div wx-media-box-body>
                <h4 wx-media-box-title>标题二</h4>
                <p wx-media-box-desc>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
              </div>
            </a>
          </div>
          <div wx-panel-footer>
            <a wx-cell-link [accessIcon]="true" label="查看更多" [uri]="more1"></a>
          </div>
        </div>
        <div wx-panel>
          <div wx-panel-header>文字组合列表</div>
          <div wx-panel-body>
            <div wx-media-box-text>
              <h4 wx-media-box-title>标题一</h4>
              <p wx-media-box-desc>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
            </div>
            <div wx-media-box-text>
              <h4 wx-media-box-title>标题二</h4>
              <p wx-media-box-desc>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
            </div>
          </div>
          <div wx-panel-footer>
            <a wx-cell-link [accessIcon]="true" label="查看更多" [uri]="more2"></a>
          </div>
        </div>
        <div wx-panel>
          <div wx-panel-header>小图文组合列表</div>
          <div wx-panel-body>
            <div wx-media-box-small-app-msg>
              <div wx-cells>
                <a wx-cell-access [uri]="links3">
                  <div wx-cell-header><img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                    alt=""
                    style="width:20px;margin-right:5px;display:block"></div>
                  <div wx-cell-body [is-primary]="true">
                    <p>文字标题</p>
                  </div>
                  <div wx-cell-footer></div>
                </a>
                <a wx-cell-access [uri]="links4">
                  <div wx-cell-header><img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                    alt=""
                    style="width:20px;margin-right:5px;display:block"></div>
                  <div wx-cell-body [is-primary]="true">
                    <p>文字标题</p>
                  </div>
                  <div wx-cell-footer></div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div wx-panel>
          <div wx-panel-header>文字列表附来源</div>
          <div wx-panel-body>
            <div wx-media-box-text>
              <h4 wx-media-box-title>标题一</h4>
              <p wx-media-box-desc>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
              <ul wx-media-box-info>
                <li wx-media-box-info-meta>文字来源</li>
                <li wx-media-box-info-meta>时间</li>
                <li wx-media-box-info-meta-extra>其它信息</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="page__ft">
        <a style="cursor: pointer;" [routerLink]="['/']"><img src="./images/icon_footer_link.png"/></a>
      </div>
    </div>
  `,
})
export class PanelDemoComponent {
  private links1: string = "http://www.baidu.com/";
  private links2: Array<any> = ["/list"];
  private links3: string = "http://cn.bing.com/";
  private links4: Array<any> = ["/button"];
  private more1: string = "http://www.soso.com/";
  private more2: Array<any> = ["/icons"];
}
