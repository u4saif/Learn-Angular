import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  fruite;
  isSelected=true;
  canSave=false;
  course=[
    {id:1 , item:"Good"},
    {id:2 , item:"Too good"}
  ];
  viewMode='list';
 books=[
   {id:1,name:'Book 1'},
   {id:2,name:'Book 2'},
   {id:3,name:'Book 3'}
 ]
 Add(){
  
   this.books.push({id:4,name:'Book 4'});
 }
 Remove(id){
   let index=this.books.indexOf(id);
   this.books.splice(index,1);
 }
 Load(){
   this.fruite=[
     {id:1, name:"apple"},
     {id:2, name:"banana"},
     {id:3, name:"Guava"}
   ]
 }
 track(index,item){
   return item ? item.id : undefined;
 }
 check(){
   this.canSave=!this.canSave;
 }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/