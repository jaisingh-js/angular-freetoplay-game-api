import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-offline-search',
  templateUrl: './offline-search.component.html',
  styleUrls: ['./offline-search.component.css']
})
export class OfflineSearchComponent {
  @Output() inputText: EventEmitter<string> = new EventEmitter<string>();


  inputUpdated(searchText: string) {
    this.inputText.emit(searchText); 
  }
}
