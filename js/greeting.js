var hello = "hello";
var userName = prompt( "Whats your name?" );
var checkUserName = function checkUserName(){
    if( !userName  ){
        userName = prompt( "Soooooo you gonna say your real name or what?" );
        checkUserName();
        else if( username===" "){
          userName = prompt( "Soooooo you gonna say your real name or what?" );
          checkUserName();
          (userName||userName=== " ")

        }
    }
};

checkUserName();

alert( hello + "" + userName );
