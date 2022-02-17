document.addEventListener('DOMContentLoaded', event => {

    const app = firebase.app();


})

function uploadFile(files) {
    const storageRef = ref(getStorage(), 'phone.jpg');

    const file = files.item(0);

    uploadBytes(storageRef, file).then((snapshot) => {
        console.log("Uploaded a file")
    })
}