import './Service.css';
import CompleteImg from './../../img/serviceComplete.png';
function Service_Complete({ setModalOpen, id, title, content, writer }: PropsType) {

    return (
        <div className={"Service_post_complete"}>
            <img src={CompleteImg} />
        </div>
    );
}

export default Service_Complete;