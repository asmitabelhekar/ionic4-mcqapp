import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  categoryNames = [
    {
      "id": "0",
      "categoryName": "abcddddddd",
      "subCategory": [
        { "subCategoryKey": "subCategoryKey" },
        { "subCategoryKey": "subCategoryKey" },
        { "subCategoryKey": "subCategoryKey" },
        { "subCategoryKey": "subCategoryKey" }]
    },
    {
      "id": "1",
      "categoryName": "abcddddddd",
      "subCategory": [
        { "subCategoryKey": "subCategoryKey" },
        { "subCategoryKey": "subCategoryKey" },
        { "subCategoryKey": "subCategoryKey" },
        { "subCategoryKey": "subCategoryKey" }]
    },
    {
      "id": "2",
      "categoryName": "abcddddddd",
      "subCategory": [
        { "subCategoryKey": "subCategoryKey" },
        { "subCategoryKey": "subCategoryKey" },
        { "subCategoryKey": "subCategoryKey" },
        { "subCategoryKey": "subCategoryKey" }]
    },
    {
      "id": "3",
      "categoryName": "abcddddddd",
      "subCategory": []
    },
    {
      "id": "4",
      "categoryName": "abcddddddd",
      "subCategory": [
        { "subCategoryKey": "subCategoryKey" },
        { "subCategoryKey": "subCategoryKey" },
        { "subCategoryKey": "subCategoryKey" },
        { "subCategoryKey": "subCategoryKey" }]
    },
    {
      "id": "5",
      "categoryName": "abcddddddd",
      "subCategory": []
    },
    {
      "id": "6",
      "categoryName": "abcddddddd",
      "subCategory": []
    },
    {
      "id": "7",
      "categoryName": "abcddddddd",
      "subCategory": [
        { "subCategoryKey": "subCategoryKey" },
        { "subCategoryKey": "subCategoryKey" },
        { "subCategoryKey": "subCategoryKey" },
        { "subCategoryKey": "subCategoryKey" }]
    },
    {
      "id": "8",
      "categoryName": "abcddddddd",
      "subCategory": [
        { "subCategoryKey": "subCategoryKey" },
        { "subCategoryKey": "subCategoryKey" },
        { "subCategoryKey": "subCategoryKey" },
        { "subCategoryKey": "subCategoryKey" }]
    }]


  showCategory = 1;
  subCategoryArray: any;
  constructor(public router : Router) { }

  checkSubCategory(getId) {
    for (let i = 0; i <= this.categoryNames.length; i++) {
      if (getId == this.categoryNames[i].id) {
        this.subCategoryArray = this.categoryNames[i].subCategory;
        if(this.subCategoryArray.length > 0){
          this.showCategory = 0;
        }else{
            this.router.navigate(['/questionanswers']);
        }
      }
    }
  }

  backToCategory(){
    this.showCategory = 1;
  }

}
