import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './shared/reducers';
import { getLoading } from './shared/_selectors/shared.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngrx';
  showLoading: Observable<boolean>;

  constructor(private store: Store <AppState>) {}
  ngOnInit(): void {
    this.showLoading = this.store.select(getLoading);
  }
}
