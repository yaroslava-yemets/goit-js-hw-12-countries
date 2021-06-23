import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import * as Confirm from "@pnotify/confirm";
import "@pnotify/confirm/dist/PNotifyConfirm.css";

export default function errorMessage() {
  error({
    text:
      "Too many matches found. Please enter a more specific query.",
    delay: 4000,
    // modules: new Map([
    //   [
    //     Confirm,
    //     {
    //       confirm: true,
    //     //   buttons: [
    //     //     {
    //     //       text: "Ok",
    //     //       primary: true,
    //     //       click: notice => {
    //     //         notice.close();
    //     //       }
    //     //     }
    //     //   ]
    //     }
    //   ]
    // ])
  });
}

