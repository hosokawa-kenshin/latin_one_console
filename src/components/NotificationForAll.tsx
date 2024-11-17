import { useNavigate } from "react-router-dom"
import './NotificationForAll.css'
function NotificationForAll() {

    const navigate = useNavigate()
    const handleHomeView = () => {
        navigate('/')
    }

    return(
        <div className="NotificationForAll">
            <h1 className="title">
                NotificationForAll
            </h1>
            <form action="http://localhost:4000/notifications/sendAll" method="post">
                <div>
                    <label htmlFor="topic">Topic</label>
                        <select id="topic" name="topic" required>
                            <option value="" disabled selected>選択してください</option>
                            <option value="Product">Product</option>
                            <option value="Shop">Shop</option>
                            <option value="Announce">Announce</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="title">タイトル</label>
                        <input type="text" id="title" name="title" required>
                        </input>
                        </div>
                    <div>
                    <div>
                        <label htmlFor="body">本文</label>
                        <input type="text" id="body" name="body" required>
                        </input>
                        </div>
                    <input type="submit" value={"送信"}></input>
                </div>
            </form>

            <button className = 'homebutton' onClick={handleHomeView}>ホーム画面へ</button>
        </div>

    )
}
export default NotificationForAll