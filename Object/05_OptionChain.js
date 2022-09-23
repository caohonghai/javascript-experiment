let userAdmin = {
  admin() {
    console.log("I am admin");
  },
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.(); // 啥都没发生（没有这样的方法）

/**
 * @Summary
 * obj?.props
 * obj?.[props]
 * obj.method?.()
 * 注：不能乱用可选链。
 * For example, if according to our code logic user object must exist, but address is optional, 
 * then we should write user.address?.street, but not user?.address?.street.
 * Then, if user happens to be undefined, we’ll see a programming error about it and fix it. 
 * Otherwise, if we overuse ?., coding errors can be silenced where not appropriate, and become more difficult to debug.
 */