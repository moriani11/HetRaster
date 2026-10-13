import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private http = inject(HttpClient);
  data = signal<any>(null);

  ngOnInit() {
    this.http.get('/api/HetRaster')
      .subscribe(d => this.data.set(d));
  }
}
