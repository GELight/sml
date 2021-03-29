import SmlDocument from "./SmlDocument";

export default class SmlRequest {

    public static async get(url: string): Promise<SmlDocument> {
        const response = new Response(`Test\nEnd`, {
            headers: {
                "Content-Type": "text/plain"
            },
            status: 200
        });
        const responseText = await response.text();
        return SmlDocument.parse(responseText);
    }

    public static async post(url: string, data: SmlDocument): Promise<SmlDocument> {
        const response = await fetch(url, {
            body: data.toString(),
            headers: {
                "Accept": "text/plain",
                "Content-Type": "text/plain"
            },
            method: "post"
        });
        const responseText = await response.text();
        return SmlDocument.parse(responseText);
    }

    public static async delete(url: string): Promise<SmlDocument> {
        const response = await fetch(url, {
            headers: {
                "Content-Type": "text/plain"
            },
            method: "delete"
        });
        const responseText = await response.text();
        return SmlDocument.parse(responseText);
    }

    public static async put(url: string, data: SmlDocument): Promise<SmlDocument> {
        const response = await fetch(url, {
            body: data.toString(),
            headers: {
                "Content-Type": "text/plain"
            },
            method: "put"
        });
        const responseText = await response.text();
        return SmlDocument.parse(responseText);
    }

    public static async patch(url: string, data: SmlDocument): Promise<SmlDocument> {
        const response = await fetch(url, {
            body: data.toString(),
            headers: {
                "Content-Type": "text/plain"
            },
            method: "patch"
        });
        const responseText = await response.text();
        return SmlDocument.parse(responseText);
    }

}
