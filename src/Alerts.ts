import toast from "react-hot-toast";
import Swal from "sweetalert2";

export const successAlert = () => {
  toast.success("Your changes have been saved successfully", {
    style: {
      minWidth: "fit-content",

      fontSize: "16px",
    },
  });
};

export const promtLogin =  async () => {
   await Swal.fire({
    title: "You need to log in to continue.",
    showCancelButton: true,
    html: `<div id="googleLogin" style={{"margin":"auto"}}></div>`,
    showConfirmButton: false,
    customClass: {
      title: "swal2-title",

    },
    didOpen:()=>{
      const googleButton = document.querySelector("#googleLogin") as HTMLElement;
      google.accounts.id.renderButton(googleButton, {
        theme: "outline",
        size: "large",
        type: "standard"
      });
      googleButton?.addEventListener("click", () => {
        Swal.close();
      });
 
  }
});
  
};

export const errorAlert = () => toast.error("Something went wrong ...");
