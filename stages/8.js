import { storage } from "../storage.js";

export const stageEight = {
    async exec({ from, message, client }) {
        if (message === "1"){
            storage[from].stage = 0;

            return "✅ *ATENDIMENTO FINALIZADO*";
        }
    }
}