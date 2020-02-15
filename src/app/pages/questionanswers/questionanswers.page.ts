import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';//
// import { AlertController } from '@ionic/angular';//
import{Quizmodel} from "../quizmodel"
@Component({
  selector: 'app-questionanswers',
  templateUrl: './questionanswers.page.html',
  styleUrls: ['./questionanswers.page.scss'],
})
export class QuestionanswersPage implements OnInit {
 
  constructor(
   
  ) {  
  }

  ngOnInit() {
    
  }
  myarray: String[] = [];
i: number = 0;
categories1: String[] = ["java", "cprogram", "C++", "Spring", "Html", "Asp.net"];//categories
 newstr: String
  
  quizlist: Quizmodel[] = [
    {
      ID: 1,categories:"java",question: "Inventor of c++?", anslistobj: ["Pavan.c", "James Gosling", "Richie Richie", "Amos.Emmanual"], answer: "Richie Richie"
    },
    {
      ID: 2,categories:"java",  question: "Inventor of java?", anslistobj: ["Nayan.c", "Ärmesh", "Denish Richie", "Kiran.DY"], answer: "Denish Richie"
    },
    {
      ID: 3, categories:"java", question: "how is java?", anslistobj: ["Easy", "Difficult", "moderate", "nonoe"], answer: "Easy"
    },
    {
      ID: 4,  categories:"java",question: "Inventor of cprogram?", anslistobj: ["a", "b", "c", "d"], answer: "a"
    } 
  
  
  ];

  /******************************************************* */
quizlength: number;
selectedcategories: Quizmodel[] = [];//categories
question: String;
selectedvalue: String;
option: any[];
selectedcategories1: any[];//categories
gettingcategories() {
this.selectedcategories =  this.quizlist.filter(d => (d.categories == this.selectedvalue));
this.question = this.selectedcategories[0].question;
this.option = this.selectedcategories[0].anslistobj;
this.i = 0;
this.quizlength = this.selectedcategories.length;
  }

  /******************************************************** */
  next() {   
    ++this.i;
    this.question = this.selectedcategories[this.i].question;
    this.option = this.selectedcategories[this.i].anslistobj;
  }
  previous() {
    --this.i;
    this.question = this.selectedcategories[this.i].question;
    this.option = this.selectedcategories[this.i].anslistobj;
  }

/********************************************************* */
  
  answerkey: AnswerKey[] = [];

  check(e, str: String, answer: String) {
    if (e.target.checked) {
      console.log("..................."+str + " " + answer);
      this.answerkey.push(new AnswerKey(str, answer));
    }
    else {

      this.answerkey.splice(0, 1);
    }
    console.log(this.answerkey);
    this.recursivecheck();
  }
  ///////////////////////////////////

  marks: number = 0;
  generatemark() {
    for (var i = 0; i < this.answerkey.length; i++) {
      if (this.answerkey[i].choosen == this.quizlist[i].answer) this.marks++;
    }
    // alert("your score is "+JSON.stringify(this.marks));
    document.writeln("your score is " + this.marks);
  }

  ///////////////////////////////////

  recursivecheck() {
    var result1 = this.quizlist;
    var result2 = this.answerkey;

    var props = ['id', 'answer'];

    var result = result1.filter(function (o1) {
      // filter out (!) items in result2
      return result2.some(function (o2) {
        return o1.answer === o2.answer;
        // assumes unique id
      });

    }).map(function (o) {

      // use reduce to make objects with only the required properties
      // and map to apply this to the filtered array as a whole
      return props.reduce(function (newo, ans) {
        newo[ans] = o[ans];
        return newo;
      }, {});
    });
    console.log("result:" + JSON.stringify(result));
  }


}

export class AnswerKey {
  choosen: String;
  answer: String;
  constructor(choosen: String, answer: String) {
    this.choosen = choosen;
    this.answer = answer;
  }


  
}
