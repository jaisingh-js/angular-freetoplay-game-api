import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() inputText: EventEmitter<{ searchText: string; option: string;}> = new EventEmitter<{ searchText: string; option: string;}>();

  @Output() inputChanged: EventEmitter<null> = new EventEmitter<null>();
  option: string = '1';

  searchClicked(searchText: string) {
    this.inputText.emit({searchText: searchText, option: this.option}); 
  }

  inputUpdated(): void {
    this.inputChanged.emit();
  }
}
