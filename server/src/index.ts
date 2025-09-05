import express, { Request, Response } from "express";
import cors from "cors";
import { membershipRouter } from "./routes/membership"
import { ENV } from "./env";
import { verifyEmailTransport } from "./email";

const app = express();
app.use(cors({ origin: ENV.CLIENT_ORIGIN.split(","), credentials: true }));
app.use(express.json());

app.get("/health", (_req: Request, res: Response) => {
    res.json({ ok: true, ts: Date.now() });
});

app.use("/api/memberships", membershipRouter);

app.listen(ENV.PORT, () => {
    console.log(`✅ API on http://localhost:${ENV.PORT}`);
});

verifyEmailTransport().catch(() => {});