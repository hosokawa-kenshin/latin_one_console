import NotificationForm from './notificationform';
import InboxForm from './InboxForm';
import ExcelForm from './ExcelForm';
import './Home.css';
import SampleImage from "./image/Wi-Fi_Easy_Connect_user_experience_2.jpeg"
import { BrowserRouter, Link ,Route, useNavigate} from 'react-router-dom';

function Home(){
    const navigate = useNavigate()
    const handleNotificationFormView = () => {
        navigate('/notification')
    }
    const handleExcelFormView = () => {
        navigate('/ExcelForm')
    }
    const handleInboxFormView = () => {
        navigate('/InboxForm')
    }
    const handleNotificationForAllView = () => {
        navigate('/NotificationForAll')
    }

    return(
        
        <body>
        <h1 className='title'>
            LatinOne Client Home
        </h1>
        <div className='image'>
           <img src={SampleImage} alt="test" />
        </div>
        <div className = "NotificationHome">
   
        <header>
        </header>
            <button onClick={handleNotificationFormView}>通知送信画面</button>
        <br />
        <button onClick={handleNotificationForAllView}>全体通知送信画面</button>
        <br />
        <button onClick={handleInboxFormView}>Inbox DB更新画面</button>
        <br />
        <button onClick={handleExcelFormView}>商品・店舗 DB更新画面</button>
</div>

        </body>

    )
}
export default Home;
