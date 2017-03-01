import { Component } from "@angular/core";

@Component({
  selector: "cabin-seat-map",
  template: `
  <style>
    .list-block {
      margin: 0 0 !important;
    }
    .title {
      color: #ffffff !important;
      background: #5f5fbd !important;
    }
    .button {
      background: #6677b5 !important;
    }
  </style>
   <script>
    $("#picker").picker({
      toolbarTemplate: '<header class="bar bar-nav">\
      <button class="button button-link pull-left">按钮</button>\
      <button class="button button-link pull-right close-picker">确定</button>\
      <h1 class="title">标题</h1>\
      </header>',
      cols: [
        {
          textAlign: 'center',
          values: ['iPhone 4', 'iPhone 4S', 'iPhone 5', 'iPhone 5S', 'iPhone 6', 'iPhone 6 Plus', 'iPad 2', 'iPad Retina', 'iPad Air', 'iPad mini', 'iPad mini 2', 'iPad mini 3']
        }
      ]
    });
  </script>
  <header class="bar bar-nav">
    <h1 class='title'>旅客信息</h1>
  </header>
  <div class="content">
    <div class="list-block">
      <ul>
        <!-- Text inputs -->
        <li>
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-name"></i></div>
            <div class="item-inner">
              <div class="item-title label">中文姓：</div>
              <div class="item-input">
                <input type="text" placeholder="请输入中文姓">
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-name"></i></div>
            <div class="item-inner">
              <div class="item-title label">中文名：</div>
              <div class="item-input">
                <input type="text" placeholder="请输入中文名">
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-name"></i></div>
            <div class="item-inner">
              <div class="item-title label">英文姓：</div>
              <div class="item-input">
                <input type="text" placeholder="请输入英文姓">
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-name"></i></div>
            <div class="item-inner">
              <div class="item-title label">英文名：</div>
              <div class="item-input">
                <input type="text" placeholder="请输入英文名">
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-email"></i></div>
            <div class="item-inner">
              <div class="item-title label">证件类型：</div>
              <div class="item-input">
                <input type="text" id='picker'/>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-email"></i></div>
            <div class="item-inner">
              <div class="item-title label">证件号码：</div>
              <div class="item-input">
                <input type="text"/>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-email"></i></div>
            <div class="item-inner">
              <div class="item-title label">电子邮箱：</div>
              <div class="item-input">
                <input type="email" placeholder="外籍旅客必填">
              </div>
            </div>
          </div>
        </li>
         <li>
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-email"></i></div>
            <div class="item-inner">
              <div class="item-title label">电话号码：</div>
              <div class="item-input">
                <input type="email" placeholder="E-mail">
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="content-block">
      <div class="row">
        <div class="col-50"><a href="#" class="button button-big button-fill">取消</a></div>
        <div class="col-50"><a href="#" class="button button-big button-fill">提交</a></div>
      </div>
    </div>
  </div>
  <script type='text/javascript' src='app/zepto.js' charset='utf-8'></script>
  <script type='text/javascript' src='app/sm.js' charset='utf-8'></script>
  `,
  styleUrls: ['app/sm.css']
})
export class CabinSeatMap { }
