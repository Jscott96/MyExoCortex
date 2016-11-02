import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    moduleId: module.id,
    selector:'register',
    templateUrl:'register.component.html',
    styleUrls:['register.component.css']
})
export class RegisterComponent{
    constructor(
        private router: Router)
    {
    }
    goToLogin():void{
        let link = ['/login'];
        this.router.navigate(link);
    }
    register():void{

    }
}