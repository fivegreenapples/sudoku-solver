import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { GridComponent } from './grid/grid.component';

const routes: Routes = [
  {
    matcher: function (segments) {
      if (segments.length < 2) return null;
      if (segments[0].path !== 'game') return null;
      if (!segments[1].path.match(/^[1-9-]{81}$/)) return null;
      return {
        consumed: segments,
        posParams: {
          state: new UrlSegment(segments[1].path, {}),
        },
      };
    },
    component: GridComponent,
  },
  { path: '', component: GridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
