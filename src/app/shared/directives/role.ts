import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[appRole]',
  standalone: true
})
export class RoleDirective {

  private currentRole = 'ADMIN';

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input()
  set appRole(role: string) {

    this.viewContainer.clear();

    if (role === this.currentRole) {

      this.viewContainer.createEmbeddedView(this.templateRef);

    }

  }

}
