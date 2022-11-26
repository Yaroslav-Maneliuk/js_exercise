//Implement the bind function.

Function.prototype.myBind = function (context, ...args) {
  return (...rest) => {
    return this.call(context, ...args.concat(rest));
  };
};

function log(...props) {
  console.log(this.name, this.age, ...props);
}

const obj = { name: "Yaroslav", age: 24 };
const bound = log.myBind(obj, 50);

bound();
