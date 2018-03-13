import React from "react";
import axios from "axios";

class Authroute extends React.Component {
    componentDidMount() {
        async () => {
            const res = await axios.post('/user/info')
            if (res.status === 200 && res.data.code === 0) {
                console.log(res.data);
            }
        }
    }
}
export default Authroute