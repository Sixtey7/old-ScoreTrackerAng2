import { Component, ViewChild } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { 
    ROUTER_PROVIDERS,
    RouteConfig,
    ROUTER_DIRECTIVES,
    Router
} from '@angular/router-deprecated';
import './rxjs-operators';


import { AgricolaGameRouterComponent } from './agricola/agricola';
import { LauncherComponent }  from './launcher/launcher';
@Component({
    selector: 'score-tracking-app',
    directives: [ROUTER_DIRECTIVES, AgricolaGameRouterComponent],
    providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS],
    templateUrl: 'app/app.component.html'
})
@RouteConfig([
    {
        path: '',
        name: 'Home',
        redirectTo: ['LauncherComponent']
    },
    {
        path: 'launcher',
        name: 'LauncherComponent',
        component: LauncherComponent,
        useAsDefault: true
    },
    {
        path: 'agricola/...',
        name: 'AgricolaGameRouterComponent',
        component: AgricolaGameRouterComponent,
    }
])
export default class AppComponent {
    constructor(private router: Router) {
        console.log('Standing up the app...');
    }
}

