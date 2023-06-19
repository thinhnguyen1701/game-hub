import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{ 
        key: "58b1f901b7754734aa964d00f14ec73b"
    }
});