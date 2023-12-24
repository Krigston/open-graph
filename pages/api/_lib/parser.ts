import {NextApiRequest} from "next";
import {ParsedRequest} from "./types";

export function parseRequest(req: NextApiRequest) {
    const { title, desc , img} = req.query as ParsedRequest;

    return {
        title,
        desc,
        img
    };
}
