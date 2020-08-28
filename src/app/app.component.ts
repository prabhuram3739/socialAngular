import { Component, SecurityContext } from '@angular/core';
import { Post } from './post.modal';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'socialAngular';
  public post:Post;
  public postList: Post[];
public imageUrl: string;
  public constructor(private sanitizer: DomSanitizer) {
    this.post = new Post();

    //Sample Video Post
    const samplePostVideo = new Post();
    //samplePostVideo.postType = 'VIDEO';
    //samplePostVideo.postValue = "../assets/sample.mp4";
    this.postList = [];
  }

  /** POst Text */
  public postText() {
    //Splice - Using this we can add element to any positon
    this.postList.splice(0, 0, this.post);
    //Reinitialize
    this.post = new Post();
  }

  /* Update the Like COunt */
  public likeCount(item: Post) {
    item.likeCount += 1;
  }

  /* Subscribe Count */
  public subscribeCount(item: Post) {
    item.subscribeCount += 1;
  }

  /* Add Comment */
  public addComment(item: Post) {
    item.commentList.push('thank you');
  }

  /* Delete Post */
  public deletePost(itemIndex: number) {
    this.postList.splice(itemIndex, 1);
  }

  /* Post Image */
  public postImage(event) {
    const refElement = event.target;
    const uploadedFile = refElement.files[0];
    let uploadedFileAsURL = URL.createObjectURL(uploadedFile);
    this.post.postType = 'IMAGE';
    this.post.postValue = uploadedFileAsURL;

    this.postList.splice(0, 0, this.post);

    //Reinitialize
    this.post = new Post();
  }

  /* Post Image */
  public postVideo(event) {
    const refElement = event.target;
    const uploadedFile = refElement.files[0];
    let uploadedFileAsURL = URL.createObjectURL(uploadedFile);
    this.post.postType = 'VIDEO';
    this.post.postValue = uploadedFileAsURL;

    this.postList.splice(0, 0, this.post);

    //Reinitialize
    this.post = new Post();
  }
}
