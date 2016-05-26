import {Component, Input} from '@angular/core';
import {NgSwitch} from '@angular/common';

@Component({
    selector: 'li-gumb',
    directives: [NgSwitch],
    template: `<li class="test1"><a (click)="changeMessage($event)">{{num}} - {{test}}</a></li>`
})
export class LiGumbComponent {
    test: string = "(Click Me)";
    @Input() num: number = 1;
    
    changeMessage(e) {
        this.test += " ?";
    }


}