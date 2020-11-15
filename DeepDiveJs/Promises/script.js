function fakeDownload ( done ){
    setTimeout(function(){
        let download_data = "Some data we ripped of the intervals ";
        done(download_data);
    } , 1000 );
}

fakeDownload( function(data) {
    console.log("We downloaded a file ");
    console.log(data);
} )