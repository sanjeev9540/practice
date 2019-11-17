function identify(context){
    return context.name.toUpperCase();
}

function speak(context){
    var greeting = 'hello i am ' + identify(context);
    console.log(greeting);
}

