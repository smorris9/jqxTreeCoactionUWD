import { AfterViewInit, Component, OnInit, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { jqxTabsComponent } from 'jqwidgets-ng/jqxtabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit, OnInit {
	
	@ViewChild('classCodeTabs', { static: false }) classCodeTabs!: jqxTabsComponent;
	@ViewChild('unorderedList', { static: false }) unorderedList: ElementRef;

	private classCodeCount: number = 0;
	private tabsSettings: jqwidgets.TabsOptions =
	{
		width: "90%",
		height: 200,
		position: "top",
		animationType: "none",
		selectionTracker: false
	};

   	ngOnInit() {

	}

	ngAfterViewInit(): void
	{
		this.classCodeTabs.createComponent(this.tabsSettings);
	}

	getWidth() : any {
		if (document.body.offsetWidth < 500) {
			return '90%';
		}
		
		return 500;
	}
	
	tabclick(event: any): void {
		if (event.args.item == this.unorderedList.nativeElement.children.length - 1) {
			this.classCodeTabs.addAt(event.args.item, 'Sample title ' + this.classCodeCount, 'Sample content number: ' + this.classCodeCount);
			this.classCodeCount++;
		}
	};
}

