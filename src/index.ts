import { Main } from "./app/main";
import { defaultTicketState } from "./defaultStates";

const renderApp = () => {
    const rendered: string = new Main(defaultTicketState).render();
    const appID = document.getElementById("app");
    if(appID){
        appID.innerHTML = rendered;
    }
}

renderApp();
