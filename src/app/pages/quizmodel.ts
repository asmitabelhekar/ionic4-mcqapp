export class Quizmodel {

 ID :number;
 categories:String;
 question:String;
 anslistobj:String[];
 answer:String;

 constructor(  ID :number,categories:String, question:String,
 anslistobj:String[], answer:String) {
 this.ID=ID;
this.categories=categories;
this.anslistobj=anslistobj;
this.answer=answer;
}
}
export class Answermodel
{

option:String[];
constructor(option:String[]){

this.option=option;

}
}

