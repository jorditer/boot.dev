import express, { Request, Response } from "express";
import path from "path";

const app = express();
const PORT = 8080;
let body = "OK it worked"
const handlerReadiness = (req: Request, res: Response) => {
	res.set({
		"Content-Type": "text/plain",
	})
	res.status(200).send(body)
}

app.use("/app", express.static("./src/app")); // the path is from where you started the server



app.get("/healthz", handlerReadiness)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});