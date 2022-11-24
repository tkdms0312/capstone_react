import React, { useEffect } from "react";
import axios from 'axios';
import userEvent from "@testing-library/user-event";

function User () {
    // useEffect(() => {
    //     axios.get('/user')
    //         .then(response => {
    //             console.log(response);
    //         });
    // }, []);
    return (
        <div class="Users">
        <aside> {/*오른쪽에 로그인버튼 부분 */}
            <div className="Users" >
                로그인성공
            </div>
        </aside>
    </div>
    );
}

export default User