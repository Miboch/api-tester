import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
  TemplateRef
} from '@angular/core';
import {ConfigurationTabComponent} from '../../configuration-tab/configuration-tab.component';

@Component({
  selector: 'app-configuration-tab-container',
  templateUrl: './configuration-tab-container.component.html',
  styleUrls: ['./configuration-tab-container.component.scss']
})
export class ConfigurationTabContainerComponent implements OnInit, AfterViewInit {
  currentTab!: ConfigurationTabComponent;
  @ContentChildren(ConfigurationTabComponent) tabs!: QueryList<ConfigurationTabComponent>;

  constructor(private change: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.currentTab = this.tabs.first;
    this.change.detectChanges();
  }

  switchTab(nextTab: ConfigurationTabComponent) {
    this.currentTab = nextTab;
  }

}
