import {EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ibol-toggle',
  templateUrl: './ibol-toggle.component.html',
  styleUrls: ['./ibol-toggle.component.scss'],
})
export class IbolToggleComponent implements OnInit {

  isActive = false;
  @Output() active = new EventEmitter();

  constructor() { }

  onClick(){
    this.isActive = !this.isActive;
    this.active.emit(this.isActive);
  }

  ngOnInit() {

  }
}
