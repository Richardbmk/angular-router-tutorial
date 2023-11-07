import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';
import { Crisis } from './crisis';
import { crisisDetailResolver } from './crisis-detail-resolver.resolver';

describe('crisisDetailResolverResolver', () => {
  const executeResolver: ResolveFn<Crisis> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() =>
      crisisDetailResolver(...resolverParameters)
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
