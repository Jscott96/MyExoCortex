import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
<h1>myExoCortex</h1>
<nav>
<a routerLink="/login" routerLinkActive="active">Login</a>
<a routerLink="/register" routerLinkActive="active">Register</a>
</nav>
<router-outlet></router-outlet>
`
})

export class AppComponent { }
