import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {TasksProvider} from "../../providers/tasks/tasks";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tasks: any;

  constructor(public navCtrl: NavController, public tasksService: TasksProvider, public alertCtrl: AlertController) {

  }

  ionViewDidLoad(){

    this.tasksService.getTasks().then((data) => {
      this.tasks = data;
    });

  }

  createTask(){

    let prompt = this.alertCtrl.create({
      title: 'Add',
      message: 'What do you need to do?',
      inputs: [
        {
          name: 'title'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.tasksService.createTask({title: data.title});
          }
        }
      ]
    });

    prompt.present();

  }

  updateTask(todo){

    let prompt = this.alertCtrl.create({
      title: 'Edit',
      message: 'Change your mind?',
      inputs: [
        {
          name: 'title'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.tasksService.updateTask({
              _id: todo._id,
              _rev: todo._rev,
              title: data.title
            });
          }
        }
      ]
    });

    prompt.present();
  }

  deleteTask(todo){
    this.tasksService.deleteTask(todo);
  }

}
