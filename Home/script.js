function isUserAuthenticated() {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFhZGl0eWFrdW1hd2F0MTExQGdtYWlsLmNvbSIsImlhdCI6MTc0MDM3NDYxNSwiZXhwIjoxNzQwNDYxMDE1fQ.nSDr9ZRIp1z1-a1W0OBXdNPB6NMFUVjNWbZGZvR4uz4");
    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };
    fetch("https://admin-dev-backend.edvice.in/ping", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            // if (result.success) {
            let body = document.getElementsByTagName("body");
            body[0].children[0].remove();
            // } else {
            // window.location.href = '/HTML/signUp.html'
            // console.log(result.error.explanation)
            // }
        })
        .catch((error) => console.error(error));
}
window.onload = isUserAuthenticated;
let datas = [
    {
        images: "./images/Images.png",
        p1: "Syltherine",
        p2: "Stylish cafe chair",
        p3: `Rp 2.500.000 <span class="opacity-50"><del> Rp 3.500.000</del></span>`,
        btn: "Add to cart",
        p4: "Share",
        p5: "Compare",
        p6: "Like"
    },
    {
        images: "./images/Images (3).png",
        p1: "Leviosa",
        p2: "Stylish cafe chair",
        p3: "Rp 2.500.000",
        btn: "Add to cart",
        p4: "Share",
        p5: "Compare",
        p6: "Like"
    },
    {
        images: "./images/Images (1).png",
        p1: "Lolito",
        p2: "Luxury big sofa",
        p3: `Rp 7.000.000 <span class="opacity-50"><del> Rp 14.000.000</del></span>`,
        btn: "Add to cart",
        p4: "Share",
        p5: "Compare",
        p6: "Like"
    },
    {
        images: "./images/Images (2).png",
        p1: "Respira",
        p2: "Outdoor bar table and stool",
        p3: "Rp 500.000",
        btn: "Add to cart",
        p4: "Share",
        p5: "Compare",
        p6: "Like"
    },
    {
        images: "./images/Images (4).png",
        p1: "Grifo",
        p2: "Night lamp",
        p3: "Rp 1.500.000",
        btn: "Add to cart",
        p4: "Share",
        p5: "Compare",
        p6: "Like"
    },
    {
        images: "./images/Images (2).png",
        p1: "Muggo",
        p2: "Small mug",
        p3: "Rp 150.000",
        btn: "Add to cart",
        p4: "Share",
        p5: "Compare",
        p6: "Like"
    },
    {
        images: "../HomeImages/Images (1).png",
        p1: "Pingky",
        p2: "Cute bed set",
        p3: `Rp 7.000.000 <span class="opacity-50"><del>Rp 14.000.000</del></span>`,
        btn: "Add to cart",
        p4: "Share",
        p5: "Compare",
        p6: "Like"
    },
    {
        images: "../HomeImages/Images (2).png",
        p1: "Potty",
        p2: "Minimalist flower pot",
        p3: "Rp 500.000",
        btn: "Add to cart",
        p4: "Share",
        p5: "Compare",
        p6: "Like"
    }
]

let main_row = document.getElementById("div-row")
function getData() {
    datas.map((values) => {
        main_row.innerHTML += `
                        <div class="col-lg-3 col-md-4 col-sm-6 mt-3">
                            <div class="bg-body-secondary mainorder position-relative overflow-hidden"
                                style="height: 100%;">
                                <img width="100%" height="70%" style="object-fit: cover;"
                                    src="${values.images}" alt="">
                                <div class="positions">
                                    <p class="up p-4">-30%</p>
                                </div>
                                <div class="p-3 mediatext">
                                    <p class="fw-bold fs-5" style="margin-top: -10px;">${values.p1}</p>
                                    <p class="opacity-75" style="margin-top: -10px;">${values.p2}</p>
                                    <p class="fw-bold" style="margin-top: -10px;">${values.p3}</p>
                                </div>
                                <div class="topposition p-4">
                                    <div class="text-center ">
                                        <a href="http://127.0.0.1:5501/HTML/product.html">
                                            <button class="upcart"> ${values.btn}</button>
                                        </a>
                                        <div class="d-flex gap-3 text-light mt-3">
                                            <p><i class="fa-solid fa-share-nodes"></i> ${values.p4}</p>
                                            <p><i class="fa-solid fa-arrow-right-arrow-left"></i> ${values.p5}</p>
                                            <p><i class="fa-regular fa-heart"></i> ${values.p6}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
    })
}
getData();
function placeHolder() {
    [1, 2, 3, 4, 5, 6, 7, 8].map(() => {
        let main_row = document.getElementById("main-row");
        let main_div = document.createElement("div")
        main_div.classList.add("col-sm-6", "col-lg-3", "col-md-4", "mt-3");
        main_row.appendChild(main_div)
        let card = document.createElement("div");
        card.classList.add("card")
        card.ariaHidden = "true"
        main_div.appendChild(card);
        let card_body = document.createElement("div");
        card_body.classList.add("card-body")
        card.appendChild(card_body);
        let h5 = document.createElement("h5");
        h5.classList.add("card-title", "placeholder-glow");
        card_body.appendChild(h5);
        let span = document.createElement("span");
        span.classList.add("placeholder", "col-6", "w-100");
        span.style.height = "200px";
        h5.appendChild(span);
        let p = document.createElement("p");
        p.classList.add("card-text", "placeholder-glow", "d-flex", "gap-3")
        p.style.flexDirection = "column";
        card_body.appendChild(p);
        let span1 = document.createElement("span");
        span1.classList.add("placeholder", "col-5", "mt-3");
        span1.style.height = "20px";
        let span2 = document.createElement("span");
        span2.classList.add("placeholder", "col-6");
        span2.style.height = "20px";
        let span3 = document.createElement("span");
        span3.classList.add("placeholder", "col-7");
        span3.style.height = "20px";
        p.appendChild(span1);
        p.appendChild(span2);
        p.appendChild(span3);
    })
};
placeHolder();

setTimeout(() => {
    let divRow = document.getElementById("div-row");
    divRow.style.display = "none"
}, 0);

setTimeout(() => {
    let mainRow = document.getElementById("main-row");
    mainRow.style.display = "none"
    let divRow = document.getElementById("div-row");
    divRow.style.display = "flex"
}, 3000);