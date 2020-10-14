import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'page-not-found',
    template: `
    <div style="display: flex;
    justify-content: center;
    margin-top: 20px;">
        <h1>Page Not Found</h1>
    </div>`

})

export class PageNotFoundComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}