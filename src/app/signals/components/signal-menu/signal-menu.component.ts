import { Component, signal } from '@angular/core';
interface MenuItem {
  title: string;
  route: string;
}
@Component({
  selector: 'signal-menu',
  templateUrl: './signal-menu.component.html',
  styleUrl: './signal-menu.component.scss',
})
export class SignalMenuComponent {
  public menuItems = signal<MenuItem[]>([
    { title: 'Contador', route: 'counter' },
    { title: 'Usuario', route: 'user-info' },
    { title: 'Mutaciones', route: 'properties' },
  ]);

  // public menuItems: MenuItem[] = [
  //   {title: 'Contador', route:'counter'},
  //   {title: 'Usuario', route:'user-info'},
  //   {title: 'Mutaciones', route:'properties'},
  // ]
}
