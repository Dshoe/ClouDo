import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TasksProvider} from "../../providers/tasks/tasks";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public taskService: TasksProvider) {

  }

}
