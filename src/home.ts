//http://victorsavkin.com/post/119943127151/angular-2-template-syntax
import {NgFor, formDirectives, Component, View, bootstrap} from "angular2/angular2";

import RepoList from "./repo-list";

@Component({
    selector: "home"
})
@View({
    directives: [NgFor, formDirectives],
    //I could've just onButtonClick(name), but wanted to show #input syntax
    template:`
    <div>
        <h2>HERO</h2>
        <ul>
          {{player1.name}}
        </ul>

        <h2>POWERS</h2>
        <ul>
          <li *ng-for="#ability of player1Abilities">{{ability.name}}</li>
        </ul>

        <h2>WEAKNESS</h2>
        <ul>
          <li *ng-for="#weakness of player2Weakness">{{weakness.name}}</li>
        </ul>

      </div>
      
    <div>
        <h2>HERO</h2>
        <ul>
          {{player2.name}}
        </ul>

        <h2>POWERS</h2>
        <ul>
          <li *ng-for="#ability of player2Abilities">{{ability.name}}</li>
        </ul>

        <h2>WEAKNESS</h2>
        <ul>
          <li *ng-for="#weakness of player2Weakness">{{weakness.name}}</li>
        </ul>

      </div>
        <button (click)="generateCharacter()">generate character</button>
        <button (click)="add()">add ability and weakness</button>
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