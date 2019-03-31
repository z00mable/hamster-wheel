import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export class BaseClass implements OnDestroy {
    ngUnsubscribe = new Subject<void>();

    ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

}
