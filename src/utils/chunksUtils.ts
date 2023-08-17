

export async function readStreamChunks(reader: any, onData: (d: string) => void) {
    while (true) {
        const { done, value } = await reader.read();
        const string = new TextDecoder("utf-8").decode(value);
        onData(string)
        if (done) {
          return;
        }

      }
}




//This function returns correct chunk from string
export function fixChunkString(str: string): string {
    let formated = str
    
    const fixStart = () => {
        if(formated[0] && formated[0] !== "{") {
            formated = formated.slice(1)
            fixStart()
        }
    }

    const fixEnd = () => {
        if(formated.at(-1) && formated.at(-1) !== "}") {
            formated = formated.slice(0, -1)
            fixEnd()
        }
    }
    fixStart()
    fixEnd()


    return formated
}

type Chunk = {
    status: "content" | "done"
    value: string | null
}


//This function returns a JS Object from a string(chunk)
export function convertChunkToArray(str: string): Chunk[] {
    const json = `[${str.replaceAll("}{", "}, {")}]`
    return JSON.parse(json)
}