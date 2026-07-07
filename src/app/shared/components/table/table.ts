import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './table.html',
  styleUrl: './table.scss'
})
export class TableComponent {

  @Input() headers: string[] = [];

  @Input() rows: any[] = [];

}
