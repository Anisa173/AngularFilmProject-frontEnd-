import { TestBed } from '@angular/core/testing';

import { AppErrorHandlerInterceptor } from './app-error-handler.interceptor';

describe('AppErrorHandlerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AppErrorHandlerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AppErrorHandlerInterceptor = TestBed.inject(AppErrorHandlerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
