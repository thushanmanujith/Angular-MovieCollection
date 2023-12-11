import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faHeart, faEye } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faNotFav, faEye as faNotWatched } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.scss']
})
export class MovieTileComponent implements OnInit {
  @Input() ThumbnailUrl: string = '';
  @Input() Description: string = '';
  @Input() id: number = 0;
  @Input() isWatched: boolean = false;
  @Input() isFav: boolean = false;

  faFav = faNotFav;
  faWatched = faNotWatched;

  constructor() { }

  ngOnInit(): void {
    this.faFav = this.isFav ? faHeart : faNotFav;
    this.faWatched = this.isWatched ? faEye : faNotWatched;
  }

}
