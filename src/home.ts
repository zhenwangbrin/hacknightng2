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
    <div>
        <h2>HERO</h2>
        <ul>
          <li>~~hero goes here~~</li>
        </ul>

        <h2>POWERS</h2>
        <ul>
          <li>~~powers goes here~~</li>
        </ul>

        <h2>WEAKNESS</h2>
        <ul>
          <li>~~weakness goes here~~</li>
        </ul>

      </div>
      
    <div>
        <h2>HERO</h2>
        <ul>
          <li>~~hero goes here~~</li>
        </ul>

        <h2>POWERS</h2>
        <ul>
          <li>~~powers goes here~~</li>
        </ul>

        <h2>WEAKNESS</h2>
        <ul>
          <li>~~weakness goes here~~</li>
        </ul>

      </div>
        <button (click)="generateCharacter()">generate character</button>
    `
})
export default class Home{
    name:string = "ng-hackathon";
    player1 = {};
    player1Abilities = [];
    player1Weakness = [];
    player2 = {};
    player2Abilities = [];
    player2Weakness = [];

    onButtonClick(value){
        alert(value);
    }
    
    constructor () {
        RepoList.getInstance();
        
    }
    
    generateCharacter() {
        this.player1 = RepoList.getInstance().generateCharacter();
        this.player1Abilities = [];
        this.player1Abilities.push(RepoList.getInstance().generateAbility());
        this.player1Weakness = [];
        this.player1Weakness.push(RepoList.getInstance().generateWeakness());
        this.player2 = RepoList.getInstance().generateCharacter();
        this.player2Abilities = [];
        this.player2Abilities.push(RepoList.getInstance().generateAbility());
        this.player2Weakness = [];
        this.player2Weakness.push(RepoList.getInstance().generateWeakness());
    }
}