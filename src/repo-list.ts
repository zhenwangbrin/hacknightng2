import {NgFor, Component, View, bootstrap} from "angular2/angular2";
import {Http} from "angular2/http";

const REPOS = `https://api.github.com/users/angular/repos`;

@Component({
    selector: "repo-list"
})
@View({
    directives: [NgFor],
    template: `
    Characters:
    <div *ng-for="#character of characterCards">
        {{character.name}}, description: {{character.description}}
    </div>
    Abilities:
    <div *ng-for="#ability of abilityCards">
        {{ability.name}}, description: {{ability.description}}
    </div>
`
})
export default class RepoList {
    repos:any[] = [];
    characterCards = [];
    abilityCards = [];
    players = [];

    init() {
        this.players = [{position:1, character:{}},{position:2, character:{}},{position:-1, character:{}},{position:-1, character:{}}];
        
         this.characterCards = [{ name: "Superman", description: "1"},
                        { name: "Gymnastic", description: "2"},
                        { name: "Electric Eel", description: "3"},
                        { name: "Physic", description: "4"},
                        { name: "Ninja turtle", description: "5"},
                        { name: "Pikechu", description: "6"},
                        { name: "Sonic hog", description: "7"},
                        { name: "Tank", description: "8"},
                        { name: "Salesman", description: "9"},
                        { name: "Curby", description: "10"},
                        { name: "Hulk", description: "11"}];

        this.weaknessCards = [
            {name:'can only breathe underwater', description:'1'},
            {name:'super power only works while holding breath', description:'2'},
            {name:'is really shy of the opposite sex', description:'3'},
            {name:'weak against water', description:'4'},
            {name:'has to go to the bathroom every 2 minuts', description:'5'},
            {name:'allergic to gingers', description:'6'},
            {name:'powerless against the color blue', description:'7'},
            {name:'has no arms', description:'8'},
            {name:'lactose intolerance', description:'9'},
            {name:'is blind', description:'10'},
            {name:'has severe ADHD', description:'11'},
            {name:'100,000 dollars of student debt', description:'12'},
            {name:'strictly follows the Word of Wisdom', description:'13'},
            {name:'allergic to cats', description:'14'},
            {name:'has no legs', description:'15'},
            {name:'cross-eyed', description:'16'},
            {name:'powers only work while singing', description:'17'},
            {name:'cant eat gluten', description:'18'},
            {name:'voted for Al Gore', description:'19'}
        ];
                        
         this.abilityCards = [{ name: "Laser eyes", description: "1"},
                        { name: "Super Strength", description: "2"},
                        { name: "Mind control", description: "3"},
                        { name: "Breath fire", description: "4"},
                        { name: "Super speed", description: "5"},
                        { name: "Invisibility", description: "6"},
                        { name: "Turn into concrete", description: "7"},
                        { name: "Super sized", description: "8"},
                        { name: "Flight", description: "9"},
                        { name: "Underwater breathing", description: "10"},
                        { name: "Polymorphy", description: "11"},
                        { name: "Super Strength", description: "12"},
                        { name: "Mind control", description: "13"},
                        { name: "Breath fire", description: "14"},
                        { name: "Super speed", description: "15"},
                        { name: "Invisibility", description: "16"},
                        { name: "Turn into concrete", description: "17"},
                        { name: "Super sized", description: "18"},
                        { name: "Flight", description: "19"},
                        { name: "Underwater breathing", description: "20"},
                        { name: "Polymorphy", description: "21"},
                        { name: "Super Strength", description: "22"},
                        { name: "Mind control", description: "23"},
                        { name: "Breath fire", description: "24"},
                        { name: "Super speed", description: "25"},
                        { name: "Invisibility", description: "26"},
                        { name: "Turn into concrete", description: "27"},
                        { name: "Super sized", description: "28"},
                        { name: "Flight", description: "29"},
                        { name: "Underwater breathing", description: "30"},
                        { name: "Polymorphy", description: "31"},
                        { name: "Flight", description: "32"},
                        { name: "Underwater breathing", description: "33"}];
                    function shuffle(array) {
                        var currentIndex = array.length, temporaryValue, randomIndex;
                        // While there remain elements to shuffle...
                        while (0 !== currentIndex) {
                            // Pick a remaining element...
                            randomIndex = Math.floor(Math.random() * currentIndex);
                            currentIndex -= 1;
                            // And swap it with the current element.
                            temporaryValue = array[currentIndex];
                            array[currentIndex] = array[randomIndex];
                            array[randomIndex] = temporaryValue;
                        }
                        return array;
                    }
                    this.characterCards = shuffle(this.characterCards);
                    
                    this.abilityCards = shuffle(this.abilityCards);
    }
    constructor() {
        this.init();
    }
    generateCharacter() {
        var returnChar = this.characterCards[0];
        this.characterCards = this.characterCards.slice(1, this.characterCards.length-1);
        return returnChar;
    }
    generateAbility() {
        var returnAbility = this.abilityCards[0];
        this.abilityCards = this.abilityCards.slice(1, this.abilityCards.length-1);
        return returnAbility;
    }
}
