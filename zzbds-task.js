//任务一

var reg = /^13|15|18[0-9]\d{8}$/;
var string = "13967894321";
var myan = reg.test(string);
console.log(myan);

//任务二

var reg1 = /(\b\w+\b)\s\1/;
var myan1 = reg1.test("foo orz orz");
console.log(myan1);
