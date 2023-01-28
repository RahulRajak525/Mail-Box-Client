import { toast } from "react-toastify";

class apiUserService {
  BASE_URL = "https://identitytoolkit.googleapis.com/v1/accounts:";
  static getInstance() {
    return new apiUserService();
  }

  signUp = async (data) => {
    const response = await fetch(
      this.BASE_URL + "signUp?key=AIzaSyArMGv0B8W1fNrFkSE2cQxnyLLbg72iOaM",
      {
        method: "POST",
        body: JSON.stringify({
          email: data.userEmail,
          password: data.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      toast.success("Account created successfully!");
      return data;
    } else {
      const data_1 = await response.json();
      let errorMessage = data_1.error.errors[0].message;
      toast.error(errorMessage);
    }
  };
  signIn = async (data) => {
    const response = await fetch(
      this.BASE_URL +
        "signInWithPassword?key=AIzaSyArMGv0B8W1fNrFkSE2cQxnyLLbg72iOaM",
      {
        method: "POST",
        body: JSON.stringify({
          email: data.userEmail,
          password: data.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      toast.success("Welcome to Mail Box Client!");
      return data;
    } else {
      const data_1 = await response.json();
      let errorMessage = data_1.error.errors[0].message;
      toast.error(errorMessage);
    }
  };

  profileUpdate = async (data) => {
    const idToken = localStorage.getItem("idToken");
    const response = await fetch(
      this.BASE_URL + "update?key=AIzaSyArMGv0B8W1fNrFkSE2cQxnyLLbg72iOaM",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: idToken,
          displayName: data.displayName,
          photoUrl: data.photoUrl,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      // toast.success("Profile updated successfully!");
      return data;
    }
  };

  getUserData = async () => {
    const idToken = localStorage.getItem("idToken");
    // console.log('3', idToken)
    const response = await fetch(
      this.BASE_URL + "lookup?key=AIzaSyArMGv0B8W1fNrFkSE2cQxnyLLbg72iOaM",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: idToken,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  };
}

export const ApiUserService = apiUserService.getInstance();
