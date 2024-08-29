let logoutBtn = document.querySelector(".logout")

logoutBtn.addEventListener("click" , function(){
    swal({
        title: "Are you sure?",
        text: "Do You Want To Log Out !",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        })
        .then((willDelete) => {
        if (willDelete) {
            swal("Poof! You Are Now Logged Out !", {
            icon: "success",
            }).then( ()=> {
                setTimeout(() => {
                    window.location.href="../index.html"
                }, 500);
            } )        
        } else {
            swal("Don't Worry You Still Here !");
        }
    })
    
})