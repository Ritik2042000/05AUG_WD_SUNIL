const getUserName = document.querySelector("#user") as HTMLInputElement;
const formSubmit = document.querySelector("#form") as HTMLFormElement;
const main_container = document.querySelector(".main_container") as HTMLElement;

// interface
interface UserData {
  id: number;
  login: string;
  avatar_url: string;
  url: string;
}

//resuseable fun
const myCustomFetch = async <T>(
  url: string,
  options?: RequestInit
): Promise<T> => {
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error(`NetWork Error${res.status}`);
  }
  const data = await res.json();
  // console.log(data);
  return data;
};

// Dynamic card data fnc

const showResultUI = (singleUser: UserData) => {
  const { avatar_url, url, id, login } = singleUser;
  main_container.insertAdjacentHTML(
    "beforeend",
    `  
     <div class="card">
            <img src="${avatar_url}" alt="{login}" />
            <hr />
                 <div class="card-footer">
                    <img src="${avatar_url}" alt="{login}" />
                    <a href=${url} >Github</a>
                </div>
        </div>
        `
  );
};

const fetchUserData = (url: string) => {
  myCustomFetch<UserData[]>(url, {}).then((userInfo) => {
    for (const singleUser of userInfo) {
      showResultUI(singleUser);
    }
  });
};

// default func call
fetchUserData("https://api.github.com/users");

//search fnc

formSubmit.addEventListener("submit", async (e) => {
  e.preventDefault();

  const searchTerm = getUserName.value.toLowerCase();

  try {
    const url = "https://api.github.com/users";

    const allUserInfo = await myCustomFetch<UserData[]>(url, {});

    const matchingUser = allUserInfo.filter((user) => {
      return user.login.toLowerCase().includes(searchTerm);
    });

    main_container.innerHTML = "";

    if (matchingUser.length === 0) {
      main_container.insertAdjacentHTML(
        "beforeend",
        `<p class='emty-msg'>No User Found</p>`
      );
    } else {
      for (const singleUser of matchingUser) {
        console.log(singleUser,'inside filter');
        
        showResultUI(singleUser);
      }
    }
  } catch (error) {
    console.log(error);
  }
});
