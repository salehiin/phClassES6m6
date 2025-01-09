function x(){
    console.log('x');
    y()
    console.log('xx');
}
function y(){
    console.log('y');
    z()
    console.log('yy');
}
function z(){
    console.log('z');
    console.log('zz');
}
x();