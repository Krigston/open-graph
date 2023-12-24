import {ParsedRequest} from "./types";
import {FC} from "react";
import {renderToString} from "react-dom/server";
import { Stack, Typography} from "@mui/material";

export const OGImage: FC<ParsedRequest> = ({title, desc, img}) => {
    return (
        <div style={{background: `url(${img})`, border: 'none', backgroundSize: 'cover', width: '100%', height: '100%', display: 'flex'}}>
                    <Stack m='auto'>
                        <Typography variant='h1' color='black' style={{ position: "absolute", left: '20px', top: '20px'}}>
                            {title}
                        </Typography>
                        <Typography variant='h2' color='white' style={{ position: "absolute", right: '20px', bottom: '20px'}}>
                            {desc}
                        </Typography>
                    </Stack>
        </div>
    )
}

export function getHtml(parsedReq: ParsedRequest) {
    const { title, desc, img } = parsedReq;

    return renderToString(<OGImage title={title} desc={desc} img={img} />);
}
