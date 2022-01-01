import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const Post = () => {
    const navigate = useNavigate()

    const {Id} = useParams()
    return (
        <div className="fungsi">
            <br /><br /><br />
            <br /><br /><br />
            <div className="box">
                <Button onClick={() => navigate("/")} className=" btn7 fa fa-fw fa-undo">{' '} Kembali</Button>
                <br /> <br /> <br /><br />
                <h4 className="personal">{Id}</h4>
                <br /> <br />
                <p>
                    <Button className="btn4 fa fa-fw fa-whatsapp" href="https://api.whatsapp.com/send?phone=6281273442003" target="blank">{' '} WhatsApp</Button> {' '}
                    <Button className="btn6 fa fa-fw fa-instagram" href="https://www.instagram.com/triono_101/" target="blank">{' '} Instagram</Button>
                    <Button className="btn5 fa fa-fw fa-quora" href="https://id.quora.com/profile/Username-Triono" target="blank">{' '} Quora</Button> {' '}
                </p>
                <br /><br />
            </div>
        </div>
    )
}

export default Post;