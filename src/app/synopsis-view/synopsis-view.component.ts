import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


/**
 * Component for displaying the synopsis view of a movie.
 */
@Component({
  selector: 'app-synopsis-view',
  templateUrl: './synopsis-view.component.html',
  styleUrls: ['./synopsis-view.component.css']
})
export class SynopsisViewComponent implements OnInit {
  /**
   * @constructor is used to set dependencies. Constructor arguments then will be avaliable through "this" method   
   * @param data specific movie data, received through @MAT_DIALOG_DATA from MovieCard
   */
  constructor(
    
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Title: string;
      Director: string;
      Genre: string;
      Description: string;
      Image: string;
    }
  ) {}

  /**
   * This function calls specified methods automatically straight after Component was mounted
   */
  ngOnInit(): void {}
}