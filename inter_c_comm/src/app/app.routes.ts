import { Routes } from '@angular/router';
import { ProductformComponent } from './parent_to_child/productform/productform.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './childtoparent/about/about.component';
import { ParentComponent } from './childtoparent/parent/parent.component';
import { CourseComponent } from './childtoparent/course/course.component';
import { CourselistComponent } from './childtoparent/courselist/courselist.component';

export const routes: Routes = [
    {path:'',component:MainComponent},
    {path:'ptoc',component:ProductformComponent},
    {path:'ctop',component:AboutComponent},
    {path:'ctop1',component:ParentComponent},
    {path:'ctop2',component:CourselistComponent}
];
