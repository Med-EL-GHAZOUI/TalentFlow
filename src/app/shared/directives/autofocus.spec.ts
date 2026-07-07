import { AutofocusDirective } from './autofocus';

describe('AutofocusDirective', () => {

  it('should create an instance', () => {

    const directive = new AutofocusDirective({ nativeElement: document.createElement('input') } as any);

    expect(directive).toBeTruthy();

  });

});
