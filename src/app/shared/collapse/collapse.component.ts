import { Component, Input, ElementRef, ChangeDetectorRef, AfterViewChecked } from '@angular/core';

@Component({
    selector: 'app-collapse',
    templateUrl: './collapse.component.html',
    styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent implements AfterViewChecked {

    maxHeight = 100;

    @Input() collapsed = true;

    autoHeight = '0px';

    constructor(private elementRef: ElementRef,
                private cdRef: ChangeDetectorRef) {}

    ngAfterViewChecked() {
      const temp = this.elementRef.nativeElement.getElementsByTagName('div')[1].offsetHeight;
      if (temp !== this.maxHeight) {
        this.maxHeight = temp;
        this.cdRef.detectChanges();
      }
    }

}
