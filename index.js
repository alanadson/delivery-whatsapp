import wa from "@open-wa/wa-automate";
import { stages, getStage } from "./stages.js";

const configObject = {
  sessionId: "delivery-session-data",
  multiDevice: true,
  authTimeout: 0,
  autoRefresh: true,
  cacheEnabled: true,
  chromiumArgs: [
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-infobars",
    "--no-zygote",
    "--no-first-run",
    "--ignore-certificate-errors",
    "--ignore-certificate-errors-skip-list",
    "--disable-canvas-aa",
    "--disable-2d-canvas-clip-aa",
    "--disable-gl-drawing-for-tests",
    "--disable-dev-shm-usage",
    "--disable-accelerated-2d-canvas",
    "--disable-gpu",
    "--hide-scrollbars",
    "--disable-notifications",
    "--disable-background-timer-throttling",
    "--disable-backgrounding-occluded-windows",
    "--disable-breakpad",
    "--disable-component-extensions-with-background-pages",
    "--disable-extensions",
    "--disable-features=TranslateUI,BlinkGenPropertyTrees",
    "--disable-ipc-flooding-protection",
    "--disable-renderer-backgrounding",
    "--enable-features=NetworkService,NetworkServiceInProcess",
    "--mute-audio",
    "--proxy-server='direct://'",
    "--proxy-bypass-list=*",
    "--use-gl=desktop",
  ],
  disableSpins: true,
  headless: true,
  qrRefreshS: 20,
  qrTimeout: 0,
};

wa.create({
  configObject,
}).then((client) => start(client));

async function start(client) {
  await client.onMessage(async (message) => {
    await client.syncContacts();
    const currentStage = getStage({ from: message.from });

    const messageResponse = stages[currentStage].stage.exec({
      from: message.from,
      message: message.body,
      client,
    });

    messageResponse.then(async (value) => {
      await client.sendText(message.from, value);
    });
  });
}
