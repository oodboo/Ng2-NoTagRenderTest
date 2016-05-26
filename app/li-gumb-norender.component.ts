import {Component, Input} from '@angular/core';
import {NgSwitch} from '@angular/common';

@Component({
    selector: 'li.gumb',
    directives: [NgSwitch],
    template: `<a (click)="changeMessage($event)">{{num}} - {{test}}</a>`
})
export class LiGumbNoRenderComponent {
    test: string = "(Click Me)";
    @Input() num: number = 1;
    
    changeMessage(e) {
        this.test += " !";
    }
}