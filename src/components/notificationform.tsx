import { useNavigate } from "react-router-dom"

function NotificationForm() {

    const navigate = useNavigate()
    const handleHomeView = () => {
        navigate('/')
    }

    return(
        <div className="Management">
            <h1 className="title">
                Management
            </h1>
            <form action="http://localhost:4000/notifications/send" method="post">
                <div>
                <label htmlFor="name">名前</label>
                <input type="text" id="token" name="token">
                </input>
                </div>
                <div>
                    <input type="submit" value={"送信"}></input>
                    </div>
            </form>

            <button onClick={handleHomeView}>ホーム画面へ</button>
        </div>

    )
}
export default NotificationForm