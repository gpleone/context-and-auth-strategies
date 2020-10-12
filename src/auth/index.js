const AuthStrategy = function () {
  this.strategy = null;
};

AuthStrategy.prototype = {
  setStrategy: function (strategy) {
    this.strategy = strategy;
  },
  signIn: function (data) {
    return this.strategy.signIn(data)
  },
  signOut: function (data) {
    return this.strategy.signOut(data);
  }
};

const HttpBin = function () {
  this.signIn = async function (data) {
    const url = `http://httpbin.org/basic-auth/${data.user}/${data.password}`;
    const response = await fetch(url);
    const info = await response.json()
    return info;
  };
  this.signOut = function () {
    this.signOut = function () {
      console.log("HttpBin signOut: implementation here");
    };
  };
};

const OtherStrategy = function () {
  this.signIn = function (data) {
    console.log("OtherStrategy signIn: implementation here");
    return { firstName: data.user };
  };
  this.signOut = function () {
    console.log("OtherStrategy signOut: implementation here");
  };
};

const authStrategy = new AuthStrategy();
const httpBin = new HttpBin();
const otherStrategy = new OtherStrategy();

export { authStrategy, httpBin, otherStrategy };
