import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-configuration-tab',
  templateUrl: './configuration-tab.component.html',
  styleUrls: ['./configuration-tab.component.scss']
})

export class ConfigurationTabComponent implements OnInit {
  @ViewChild('tabTemplate', {read: TemplateRef}) tabTemplate!: TemplateRef<any>;

  @Input() tabTitle: string = "";

  constructor() {
  }

  ngOnInit(): void {
  }
}

