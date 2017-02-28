import { OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
export declare class IndexComponent implements OnInit {
    private route;
    private showFlag;
    constructor(route: ActivatedRoute);
    ngOnInit(): void;
    menuOpen(input: any): void;
}
