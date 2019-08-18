import { Component } from '@angular/core';
import { ClrFormLayouts } from '@ng-holistic/clr-forms';
import { TextMask } from '@ng-holistic/clr-controls';
import { map } from 'rxjs/operators';
import { FormGroup, Validators } from '@angular/forms';
import { InputErrorDisplayStrategy } from '@ng-holistic/clr-forms'


const definition: ClrFormLayouts.ClrFormLayout = {
  kind: 'fields',
  fields: [
    {
      id: 'text',
      kind: 'TextField',
      props: {
        label: 'Text',
        placeholder: 'Type something'
      },
      validators: [Validators.required]
    }]
};

@Component({
  selector: 'my-app',
  template: `<hlc-clr-form [definition]="definition"></hlc-clr-form>`
})
export class AppComponent {
  readonly definition = definition;
}
