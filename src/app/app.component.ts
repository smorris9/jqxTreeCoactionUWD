import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';

import { jqxExpanderComponent } from "jqwidgets-ng/jqxexpander";
import { jqxTreeComponent } from 'jqwidgets-ng/jqxtree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit, OnInit {
  
  treeSource: any[] =
	 [
		 {
			 icon: "icon-calendar.png", label: "Mail", expanded: true,
			 items:
			 [
				 { icon: "icon-calendar.png", label: "Calendar" },
				 { icon: "icon-calendar.png", label: "Contacts", selected: true }
			 ]
		 },
		 {
			 icon: "icon-calendar.png", label: "Inbox", expanded: true,
			 items:
			 [
				 { icon: "icon-calendar.png", label: "Admin" },
				 { icon: "icon-calendar.png", label: "Corporate" },
				 { icon: "icon-calendar.png", label: "Finance" },
				 { icon: "icon-calendar.png", label: "Other" },
			 ]
		 },
		 { icon: "icon-calendar.png", label: "Deleted Items" },
		 { icon: "icon-calendar.png", label: "Notes" },
		 { icon: "icon-calendar.png", label: "Settings" },
		 { icon: "icon-calendar.png", label: "Favorites" }
  ];

   ngOnInit() {
  }

  ngAfterViewInit() {
	
  }
}
