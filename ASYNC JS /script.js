function download(url){
    console.log(`Downloading started from ${url}`);
    setTimeout( () => {
        console.log(`Download Over and saved as ${url.split('/').pop()}`);
    } , 2000 ) ; 
}


function compress( file , format ){
    console.log(`Compressing ${file}`);
    setTimeout(()=>{
        console.log(`Compressed and saved as ${file.split('.')[0] + format}`);
    } , 2000 );
}

function  upload(server , file){
    console.log(`Uploading ${file} to ${server}`);
    setTimeout(()=>{
        console.log(`Uploaded to ${server}/${file}`);
    } , 2000 );
}


download('https://www.somesite.com/myfile.png');
compress('myfile.png' , 'zip');
upload('www.yrs.in' , 'image.zip');


/*
Downloading started from https://www.somesite.com/myfile.png
Compressing myfile.png
Uploading image.zip to www.yrs.in
Download Over and saved as myfile.png
Compressed and saved as myfilezip
Uploaded to www.yrs.in/image.zip
*/