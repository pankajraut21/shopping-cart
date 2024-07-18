import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[integerOnly]',
  standalone: true
})
export class IntegerOnlyDirective {
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight'];

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (
        (this.specialKeys.indexOf(event.key) !== -1) || 
        // Allow arrow keys for navigation and value adjustment
        (event.key === 'ArrowUp' || event.key === 'ArrowDown')
    ) {
      return;
    }
    const key = event.key;
    if (!/^\d$/.test(key)) {
      event.preventDefault();
    }
  }

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const sanitizedValue = input.value.replace(/[^0-9]/g, '');
    if (sanitizedValue !== input.value) {
      input.value = sanitizedValue;
      input.dispatchEvent(new Event('input'));
    }
  }
}
