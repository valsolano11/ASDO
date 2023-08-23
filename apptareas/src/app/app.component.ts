import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apptareas';
 
  constructor(private service:SharedService){}

  notes:any=[];

  listNotes(){
    this.service.getNotes().subscribe((res)=> {
      this.notes = res;
    })
  }
   
ngOnInit(){
    this.listNotes();
}
  addNotes(newNote:string){
    this.service.addNotes(newNote).then((res) =>{
      console.log(res);
      this.listNotes();
    })
  }
  deleteNotes(id:string){
    this.service.deleteNotes(id).then((res) =>{
      console.log(res);
      this.listNotes();
    })
  }
  
}