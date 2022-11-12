import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  menuActive: number = 0;
  toggled = true;
  menus = [
    {
      id: 1,
      label: 'Home',
      icon: 'dashboard',
      link: '/dashboard'
    },
    {
      id: 2,
      label: 'Menu_1',
      icon: 'push_pin',
      childMenu: [
        {
          label: 'All Posts',
          icon: 'assignment',
          link: '/posts/all'
        },
        {
          label: 'Add Post',
          icon: 'post_add',
          link: '/posts/add'
        },
        {
          label: 'Categories',
          icon: 'category',
          link: '/posts/category'
        },
        {
          label: 'Tags',
          icon: 'tag',
          link: '/posts/tags'
        }
      ]
    },
    {
      id: 3,
      label: 'Users',
      icon: 'manage_accounts',
      childMenu: [
        {
          label: 'All Users',
          icon: 'assignment',
          link: '/users/all'
        },
        {
          label: 'Add User',
          icon: 'post_add',
          link: '/users/add'
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onMenuClick(e: number) {
    if (this.menuActive === e) {
      this.menuActive = 0;
    } else {
      this.menuActive = e;
    }
  }

  onToggle(){
    this.toggled = !this.toggled;
    console.log(this.toggled);
  }
}
