import { Component, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.scss',
})
export class PropertiesPageComponent {

  public counter = signal(10);

  public user = signal<User>({
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
  });

  public fullName = computed(
    () => `${this.user().first_name} ${this.user().last_name}`
  );

  public userChangedEffect = effect(() => {
    console.log(`${this.user().first_name} - ${this.counter()}`);
  });

  public onFieldUpdated(field: keyof User, value: string) {
    this.user.update((current) => {
      const updatedUser = { ...current };
      switch (field) {
        case 'email':
          updatedUser.email = value;
          break;
        case 'first_name':
          updatedUser.first_name = value;
          break;
        case 'last_name':
          updatedUser.last_name = value;
          break;
        case 'id':
          updatedUser.id = Number(value);
          break;
        case 'avatar':
          updatedUser.avatar = value;
          break;
      }
      return updatedUser;
    });
  }

  public increaseBy(value:number){
    this.counter.update(current => current+value)
  }
}
