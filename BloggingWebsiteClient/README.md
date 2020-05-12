# BloggingWebsiteClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Components

#### 1. ArticlesComponent
This component is used to display list of articles at articles page.

#### 2. LoginComponent
This component is used for displaying login dialog for authentication.

#### 3. PostComponent
This component is used for posting article after authentication as it is guarded by auth-guard service.

#### 4. ArticledetailsComponent
This component is used for displaying article details after clicking on title at article page.

#### 5. HomeComponent
This component is used for displaying simple home page.

#### 6. HeaderComponent
This component is used for header of the website.

#### 7. FooterComponent
This component is used for footer of the website.

## Services

#### 1. ArticleService
Provides utility functions for article and articledetails component.

#### 2.AuthService
This service is used for authentication.

#### 3.AuthguardService
This service is used for guarding Post page.

#### 4. Procces-httpmsgService
This service is used for handling http errors.

## Interceptors

#### 1. AuthInterceptor
This interceptor is to intercept every http request and add authentication header in the request.
