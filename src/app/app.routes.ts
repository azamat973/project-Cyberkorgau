import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProblemComponent } from './pages/problem/problem.component';
import { SolutionComponent } from './pages/solution/solution.component';
import { ServicesComponent } from './pages/services/services';
import { CoursesComponent } from './pages/courses/courses.component';
import { TeamComponent } from './pages/team/team';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'problem', component: ProblemComponent },
  { path: 'solution', component: SolutionComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];