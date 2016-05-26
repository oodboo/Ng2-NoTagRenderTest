import {Component} from '@angular/core';

import {LiGumbComponent} from './li-gumb.component'
import {LiGumbNoRenderComponent} from './li-gumb-norender.component'

@Component({
    selector: 'my-app',
    directives: [LiGumbComponent, LiGumbNoRenderComponent],
    template: `
        <h1>{{title}}</h1>
        
        <h2>This is with custom TAG rendering</h2>        
        <li-gumb *ngFor="let i of [1,2,3]" [num]="i"></li-gumb>
        
        <h2>This is without custom TAG rendering</h2>
        <li class="gumb" *ngFor="let i of [1,2,3]" [num]="i"></li>
    `
})
export class AppComponent {
    title = "Angular2 Render without Tags Test";
}
