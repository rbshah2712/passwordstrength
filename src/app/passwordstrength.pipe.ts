import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwordstrength'
})
export class PasswordstrengthPipe implements PipeTransform {

  transform(password:string): string  {
    if (!password) return '';

    if (password.length < 8) {
      return 'Weak';
    } else if (password.length >= 8 && password.length < 13) {
      return 'Medium';
    } else {
      // You can add more criteria for a "Strong" password
      return 'Strong';
    }
  }

}
