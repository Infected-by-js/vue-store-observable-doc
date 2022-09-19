export default class UserDto {
  constructor(userData) {
    this.id = userData.id;
    this.username = userData.username;
    this.image = userData.image;
    this.gender = userData.gender;
    this.email = userData.email;
    this.phone = userData.phone;
    this.age = userData.age;
    this.commentsCount = this.calcRandomNum(12);
    this.postsCount = this.calcRandomNum(20);
    this.todosCount = this.calcRandomNum(15);

    this.posts = [];
    this.todos = [];
    this.comments = [];
  }

  calcRandomNum(limit = 20) {
    return Math.floor(Math.random() * limit);
  }
}
