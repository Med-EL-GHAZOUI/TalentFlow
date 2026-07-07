import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss'
})
export class PaginationComponent {

  @Input() page = 1;

  @Input() totalPages = 1;

  @Output() pageChange = new EventEmitter<number>();

  previous(): void {
    if (this.page > 1) {
      this.page--;
      this.pageChange.emit(this.page);
    }
  }

  next(): void {
    if (this.page < this.totalPages) {
      this.page++;
      this.pageChange.emit(this.page);
    }
  }

}
