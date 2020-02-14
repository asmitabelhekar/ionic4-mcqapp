import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-questionanswers',
  templateUrl: './questionanswers.page.html',
  styleUrls: ['./questionanswers.page.scss'],
})
export class QuestionanswersPage implements OnInit {
 
  constructor(
    public alertController: AlertController,
    private router : Router,
    private route : ActivatedRoute
  ) {  
  }

  ngOnInit() {
    
  }

  
}
