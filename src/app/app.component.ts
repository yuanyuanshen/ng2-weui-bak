import { Component} from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app",
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  constructor(
    private route: ActivatedRoute
  ) { }
}
