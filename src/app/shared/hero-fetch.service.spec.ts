/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HeroFetchService } from './hero-fetch.service';

describe('Service: HeroFetch', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [HeroFetchService]
		});
	});

	it('should ...', inject([HeroFetchService], (service: HeroFetchService) => {
		expect(service).toBeTruthy();
	}));
});
