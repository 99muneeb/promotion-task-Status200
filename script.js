// ......................................................active page boder bottom............................................ 

const userDiv = document.querySelector('.link-one');
const adminDiv = document.querySelector('.link-two');

userDiv.addEventListener('click', function() {
  adminDiv.classList.remove('one-bottom-boder');
  userDiv.classList.add('one-bottom-boder');
});

adminDiv.addEventListener('click', function() {
  userDiv.classList.remove('one-bottom-boder');
  adminDiv.classList.add('one-bottom-boder');
});

// ...............................................................api fetch .................................................................
  async function fetchData_1() {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();
    let itemsPerPage = 3;
    let currentPage = 1;
    let startIndex = (currentPage - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;

    for (let i = startIndex; i < endIndex && i < data.data.length; i++) {
      const user = data.data[i];
      let mainContaintBox = document.createElement("div");
      mainContaintBox.classList.add("main-containt-box");
      mainContaintBox.innerHTML = `
        <div class="main-containt">
          <div class="content">
            <div class="img">
              <img src="${user.avatar}" alt="img">
            </div>
            <div class="first-content">
              <h3>${user.first_name} ${user.last_name}</h3>
              <div class="set-content">
                <div class="col-1-content">
                  <label for="">First Name</label>
                  <p>${user.first_name}</p>
                </div>
                <div class="col-1-content">
                  <label for="">Last Name</label>
                  <p>${user.last_name}</p>
                </div>
                <div class="col-1-content">
                  <label for="">Email</label>
                  <p>${user.email}</p>
                </div>
              </div>
              <div class="row3-content">
              <p>
              Alex Hales is a career coach with 5+ years of experience helping
              job seekers navigate the job search through coaching.
              </p>
          </div>
            </div>
          </div>
        </div>
      `;
      document.querySelector("#Apidata_1").appendChild(mainContaintBox);
    }
  }
  fetchData_1();
//.............................................................api data next page 2....................................................
async function fetchData_page2() {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();
    let itemsPerPage = 3;
    let currentPage = 2;
    let startIndex = (currentPage - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;

    for (let i = startIndex; i < endIndex && i < data.data.length; i++) {
      const user = data.data[i];
      let mainContaintBox = document.createElement("div");
      mainContaintBox.classList.add("main-containt-box");
      mainContaintBox.innerHTML = `
        <div class="main-containt">
          <div class="content">
            <div class="img">
              <img src="${user.avatar}" alt="img">
            </div>
            <div class="first-content">
              <h3>${user.first_name} ${user.last_name}</h3>
              <div class="set-content">
                <div class="col-1-content">
                  <label for="">First Name</label>
                  <p>${user.first_name}</p>
                </div>
                <div class="col-1-content">
                  <label for="">Last Name</label>
                  <p>${user.last_name}</p>
                </div>
                <div class="col-1-content">
                  <label for="">Email</label>
                  <p>${user.email}</p>
                </div>
              </div>
              <div class="row3-content">
              <p>
              Alex Hales is a career coach with 5+ years of experience helping
              job seekers navigate the job search through coaching.
              </p>
          </div>
            </div>
          </div>
        </div>
      `;
      document.querySelector("#Apidata_2").appendChild(mainContaintBox);
    }
  }
  fetchData_page2();


// ...............................................search box ............................................
const search = () => {
    const searchInput = document.getElementById("searchInput").value.toUpperCase();
    if (searchInput === "") {
      return;
    }
    const products = document.querySelectorAll(".main-containt-box");
    const pNames = document.getElementsByTagName("p");
    for (var i = 0; i < pNames.length; i++) {
      let match = products[i].getElementsByTagName("p")[0];
      if (match) {
        let textValue = match.textContent || match.innerHTML;
        if (textValue.toUpperCase().indexOf(searchInput) > -1) {
          products[i].style.display = "";
        } else {
          products[i].style.display = "none";
        }
      }
    }
  };
  
  document.getElementById("searchBtn").addEventListener("click", function() {
    search();
});



// <!-- Mobile menu  -->

 
function openNav() {
  var sidebar = document.getElementById("sidebar");
  if (sidebar.style.display === "block") {
    sidebar.style.display = "none";
  } else {
    sidebar.style.display = "block";
  }
}


