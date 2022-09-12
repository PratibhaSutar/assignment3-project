import { Component, ɵisListLikeIterable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment3-project';

  date = "";
  time = "";
  task = "";

  dateMessage = "";
  timeMessage = "";
  taskMessage = "";

  save() {
    
    this.dateMessage = "";
    this.timeMessage = "";
    this.taskMessage = "";
    let tasks;

    if (this.date.trim() == "") {
      this.dateMessage = "Please Select Date";
    }
    if (this.time.trim() == "") {
      this.timeMessage = "Please Select Time";
    }
    if (this.task.trim() == "") {
      this.taskMessage = "Please Select Task";
    }
    let storedDate = localStorage.getItem('date');
    let storedTime = localStorage.getItem('time');
    let storedTask = localStorage.getItem('task');

    localStorage.setItem("date",this.date);
      localStorage.setItem("time",this.time);
      localStorage.setItem("task",this.task);


    if (localStorage.getItem("date") == this.date) {
      tasks = localStorage.getItem("date");
    }
    if (localStorage.getItem("time") == this.time) {
      tasks = localStorage.getItem("time");
    }
    if (localStorage.getItem("task") == this.task) {
      tasks = localStorage.getItem("task");
    }

    
        
         this.list();
    
      
   
    //tasks.push(this.date);
    //tasks.push(this.time);
    //tasks.push(this.task);
    
    //let tasks = ["date", this.date,"time", this.time, "task", this.task];
    //if (localStorage.getItem("tasks") != null) {

      //tasks = JSON.parse(localStorage.getItem("tasks")!);
      // }
        // let mytask:any = ["date", this.date,"time", this.time, "task", this.task];
        //tasks.push(mytask);
        // localStorage.setItem("tasks",JSON.stringify(tasks));
         //this.list();
    
      //if(localStorage.getItem("tasks") != null)
      //{
      //  tasks = JSON.parse(localStorage.getItem("tasks"));
      
     // }
    
  }
  
  list  = ()=>{
    let tasks;
    let storedDate = localStorage.getItem('date');
    let storedTime = localStorage.getItem('time');
    let storedTask = localStorage.getItem('task');
    let myTable : any = document.getElementById("myTable");
    while(myTable.rows.length > 1)
    {
      myTable.deleteRow(1);
    }
    if (this.date == storedDate && this.time == storedTime)
    {

     alert('Welcome' + localStorage.getItem("task"));
     

   }
    if(this.date == storedDate && this.time == storedTime)
    {
      let tasks = JSON.parse(localStorage.getItem("tasks")!);
      
      let count = 1;
    tasks.forEach( (task : any) => {
        let str = "<tr>";
        
       str += "<td>" + task.date + "</td>";
        str += "<td>" + task.time + "</td>";
        str += "<td>" + task.task + "</td>";
        str += "</td></td>";
        str += "</tr>";

        myTable.innerHTML += str;
       count++;
      });
    }
  }
}
