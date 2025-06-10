import express, { Request, Response, NextFunction } from "express";
import path from "path";
import { config } from "./config.js";

const app = express();
const PORT = 8080;
let body = "OK it worked"
const handlerReadiness = (req: Request, res: Response) => {
	res.set({
		"Content-Type": "text/plain",
	})
	res.status(200).send(body)
}
const myMiddlewareLogResponses = (req: Request, res: Response, next: NextFunction) => {
	res.on("finish", () => {
		if (res.statusCode >= 400) {
			console.log(`[NON-OK] ${req.method} ${req.originalUrl} - Status: ${res.statusCode}`);
		}
	})
	next();
}

function myMiddlewareMetricsInc(req: Request, res: Response, next: NextFunction) {
	config.fileserverHits++;
	next();
}

function showMetrics(req: Request, res: Response, next: NextFunction) {
	// TODO
}

function reset() {
	config.fileserverHits = 0;
}

app.use("/app", express.static("./src/app")); // the path is from where you started the server
app.use(myMiddlewareLogResponses);
app.use(myMiddlewareMetricsInc);
app.use("/metrics", showMetrics);
app.use("/reset", reset);



app.get("/healthz", handlerReadiness)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});