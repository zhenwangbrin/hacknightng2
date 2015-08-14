//http://victorsavkin.com/post/119943127151/angular-2-template-syntax
import {formDirectives, Component, View, bootstrap} from "angular2/angular2";

import RepoList from "./repo-list";

@Component({
    selector: "home"
})
@View({
    directives: [formDirectives],
    //I could've just onButtonClick(name), but wanted to show #input syntax
    template:`
        <div>Welcome to the <button (click)="onButtonClick(input.value)">{{name}}</button></div>
        <input #input [(ng-model)]="name">
        <button (click)="generateCharacter()">generate character</button>
    `
})
export default class Home{
    name:string = "ng-hackathon";

    onButtonClick(value){
        alert(value);
    }
    
    constructor () {
        RepoList.getInstance();
        
    }
    
    generateCharacter() {
        alert(RepoList.getInstance().generateCharacter().name + " characterCount:" + RepoList.getInstance().characterCards.length);
    }
}