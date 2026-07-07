import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss'
})
export class SearchBarComponent {

  keyword = '';

  @Output() search = new EventEmitter<string>();

  onSearch(): void {

    this.search.emit(this.keyword);

  }

}
