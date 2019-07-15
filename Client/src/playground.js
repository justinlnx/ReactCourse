
// props:

/**
 * 这个fetchUser 函数会提供回来一个user
 */
function fetchUser() {} // to get a specific user

/**
 * 我们通常 会给提供一个具体的username
 * 就比如说我们会给这个函数加一个argument，比如说 username
 */
function fetchUser(username) {}

/**
 * 然后呢 就可以call 这个函数 代入一个具体的人名
 * 这样会的出来一个具体的user object 可能
 */
fetchUser('Justin');

/**
 * 类似的跟函数的想法呢 我们同样可以在react中 实现
 * 与其不同的是，原来这个fetchUser函数会return 一个object一个人
 * 我们在react里面 需要一个函数去return 一个 UI
 * 
 * 就比如说下面这个 Component 是描述一个user的
 */
<User />

/**
 * 如果说我想要一个具体的User 怎么办
 * 我可以给他提供一个简单的attribute
 */
<User username="Justin" />

/**
 * 具体这个user 长什么样呢
 * 然后在这个component里面呢， 我们可以使用这个提供进来的attribute/value了
 * 使用方法: this.props.username
 * 
 * 当然啦，所有的attribute 只要是在component上面使用到了
 * 都可以在component里面使用 他们都会在 props object上面出现
 * `this.props.friend`
 * 
 * 接下来 就来教大家怎么在刚刚这个contact list这个app里面正确的使用props
 */
class User extends React.Component {
  render() {
    return (
      <p>Username: {this.props.username}</p>
    )
  }
}

// class User extends React.Component {
//   state = {
//     username: 'Justin',
//   };

//   render() {
//     return (
//       <p>Username: </p>
//     )
//   }
// }