import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpAsyncService } from './services/http-async.service.ts/http-async.service';
import { httpAsyncFactory } from './factories/http-async/http-async.factory';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HelperService } from './services/helper/helper.service';
import { StorageService } from './services/storage/storage.service';
import { Network } from '@ionic-native/network/ngx';
import { IonicStorageModule } from '@ionic/Storage';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [AppComponent],
        entryComponents: [],
        imports: [
            BrowserModule,
            HttpClientModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            IonicStorageModule.forRoot({
                name: '__homeshare',
            }),
        ],
        providers: [
            StatusBar,
            SplashScreen,
            Network,
            { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
            { provide: HttpAsyncService, useFactory: httpAsyncFactory, deps: [HttpClient, HelperService, StorageService] },
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map