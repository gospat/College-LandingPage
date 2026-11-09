import { spawn } from "node:child_process";
import process from "node:process";

function waitForExit(proc) {
  return new Promise((resolve, reject) => {
    proc.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`Command exited with code=${code}`));
    });
  });
}

function waitForReady(proc, port, timeoutMs) {
  return new Promise((resolve, reject) => {
    let done = false;
    const deadline = setTimeout(() => {
      if (done) return;
      done = true;
      reject(new Error("Server did not become ready in time"));
    }, timeoutMs);

    function handleData(chunk) {
      const text = chunk.toString("utf8");
      if (/Ready in/i.test(text) || new RegExp(`http://localhost:${port}\\b`).test(text)) {
        if (done) return;
        done = true;
        clearTimeout(deadline);
        resolve();
      }
    }

    proc.stdout.on("data", handleData);
    proc.stderr.on("data", handleData);
    proc.on("exit", (code) => {
      if (done) return;
      done = true;
      clearTimeout(deadline);
      reject(new Error(`Dev server exited early (code=${code})`));
    });
  });
}

async function run() {
  const port = Number(process.env.PORT || "3014");
  const timeoutMs = Number(process.env.DEV_READY_TIMEOUT_MS || "90000");

  const buildProc = spawn("npm", ["run", "build"], {
    stdio: ["ignore", "inherit", "inherit"],
    env: { ...process.env },
  });

  try {
    await waitForExit(buildProc);

    const serverProc = spawn("npm", ["run", "start", "--", "--port", String(port)], {
      stdio: ["ignore", "pipe", "pipe"],
      env: { ...process.env, PORT: String(port) },
    });

    try {
      await waitForReady(serverProc, port, timeoutMs);
      process.env.BASE_URL = `http://localhost:${port}`;
      const mod = await import("./responsive-audit.mjs");
      const fn = mod.default;
      if (typeof fn !== "function") {
        throw new Error("responsive-audit.mjs does not export a default function");
      }
      await fn();
    } finally {
      serverProc.kill("SIGTERM");
    }
  } finally {
    buildProc.kill("SIGTERM");
  }
}

run().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
