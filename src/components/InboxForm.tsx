import { useNavigate } from "react-router-dom";
import './InboxForm.css';

function InboxForm() {

    const navigate = useNavigate();
    const handleHomeView = () => {
        navigate('/');
    };

    return (
        <div className="InboxForm">
            <h1 className="title">InboxForm</h1>
            <form action="http://localhost:4000/inbox/addfirebase" method="post">
                <div>
                    <label htmlFor="topic">Topic</label>
                    <select id="topic" name="topic" required>
                        <option value="" disabled selected>選択してください</option>
                        <option value="Product">Product</option>
                        <option value="Shop">Shop</option>
                        <option value="Announce">Announce</option>
                    </select>
                    <br />
                    <label htmlFor="title">title</label>
                    <input type="text" id="title" name="title" />
                    <br />
                    <label htmlFor="body">body</label>
                    <input type="text" id="body" name="body" />
                    <br />
                    <label htmlFor="image">imagePath</label>
                    <input type="text" id="image" name="image" />
                    <br />
                </div>
                <div>
                    <input type="submit" value={"送信"} />
                </div>
            </form>
            <button onClick={handleHomeView}>ホーム画面へ</button>
        </div>
    );
}

export default InboxForm;
