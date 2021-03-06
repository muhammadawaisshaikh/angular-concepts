import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-listing',
  templateUrl: './users-listing.component.html',
  styleUrls: ['./users-listing.component.scss']
})
export class UsersListingComponent implements OnInit {

  listing: any = [];
  user: any = {};

  constructor(
    private router: Router,
    private users: UsersService
  ) { }

  ngOnInit(): void {
    this.getUsersListing();
  }

  getUsersListing() {
    this.users.getUsers().subscribe(res => {
      this.listing = res;
      console.log(this.listing);
    })
  }

  viewUser(_id: number) {
    this.router.navigate(['/users/view-user'], { queryParams: { id: _id } });
  }

  deleteUser(id: number) {
    this.users.deleteUser(id).subscribe(res => {
      console.log(this.user);
    })
  }

}
