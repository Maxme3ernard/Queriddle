import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import { PdfDisplayComponent } from './pdf-display/pdf-display.component';
import {FormsModule} from '@angular/forms';
import { SelectMatiereComponent } from './select-matiere/select-matiere.component';
import {PdfLoaderService} from './services/pdf-loader.service';
import {HttpClientModule} from '@angular/common/http';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import {AuthService} from './services/auth.service';
import { RegisterComponent } from './register/register.component';
import { StatusComponent } from './status/status.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccueilComponent } from './accueil/accueil.component';
import {EnsureAuthenticated} from './services/ensure-authenticated.service';
import {LoginRedirect} from './services/login-redirect.service';
import {WebSocketService} from './services/web-socket.service';
import {ChatService} from './services/chat.service';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    PdfDisplayComponent,
    SelectMatiereComponent,
    ChatComponent,
    LoginComponent,
    RegisterComponent,
    StatusComponent,
    NewAccountComponent,
    AccueilComponent,
    BlogComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent, canActivate: [LoginRedirect] },
      { path: 'create_account', component: RegisterComponent, canActivate: [LoginRedirect] },
      { path: 'status', component: StatusComponent, canActivate: [EnsureAuthenticated] },
      { path: 'new_account', component: NewAccountComponent, canActivate: [LoginRedirect] },
      { path: 'accueil', component: AccueilComponent, canActivate: [EnsureAuthenticated] },
      { path: '', component: AccueilComponent, canActivate: [EnsureAuthenticated] },
      { path: 'chat', component: ChatComponent, canActivate: [EnsureAuthenticated] }
    ])
  ],
  providers: [PdfLoaderService, AuthService, EnsureAuthenticated, LoginRedirect, WebSocketService, ChatService, PostComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

