// export default function api() {
//     key: "http://api.airvisual.com/v2/nearest_city?key=",
//     base: "42fbe635-4be9-48c4-bd4c-d87e55ba989a",
// }

const endpoint = {
    nearest : {
        base: "http://api.airvisual.com/v2/nearest_city?"
    },
    search: {
        base: "http://api.airvisual.com/v2/city?"
    }
}

export default endpoint