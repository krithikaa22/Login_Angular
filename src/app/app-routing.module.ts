import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TaskSuccessComponent } from './components/task-success/task-success.component';
  
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'success', component: TaskSuccessComponent },
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
