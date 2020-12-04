import { Component, OnInit, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('sCreated') serverCreated=new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated= new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) ContentInput;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput:HTMLInputElement) {
    this.serverCreated.emit({
      // serverName: this.newServerName,
      serverName: nameInput.value,
      serverContent: this.ContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    this.blueprintCreated.emit({
      // serverName: this.newServerName,
      serverName: nameInput.value,
      serverContent: this.ContentInput.nativeElement.value
    })
   }

}
