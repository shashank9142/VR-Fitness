import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowUserComponent implements OnInit {
  user: { username: string; email: string } | null = null;

  ngOnInit(): void {
    // Simulate fetching user data
    this.user = {
      username: 'john_doe',
      email: 'john.doe@example.com'
    };
  }
}
