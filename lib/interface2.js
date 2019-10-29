const util = require('util');

async function fn() {
  return 'hello world';
}
const cbfn = util.callbackify(fn);

cbfn((err, ret) => {
  if (err) throw err;
  console.log(ret);
});
