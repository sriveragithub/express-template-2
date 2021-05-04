console.log(`henlo world`)

fetch('/ping')
    .then(res => res.json())
    .then(data => console.log(data))