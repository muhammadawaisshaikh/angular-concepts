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
    private users: UsersService,
    private router: Router
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

  // navigating to view-user with id to consume API call on view-user page 
  viewUser(_id: number) {
    this.router.navigate(['/users/view-user'], { queryParams: { id: _id} });
  }

  deleteUser(id: number) {
    this.users.deleteUser(id).subscribe(res => {
      console.log(this.user);
    })
  }

}
